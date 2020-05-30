from math import pi, sqrt, sin, cos, atan2
import os
import pandas as pd
import numpy as np

list_stations = [{'id':61, 'station_name':'Fresh Kills West', 'latitude':40.580254, 'longitude':-74.198295},
{'id':80, 'station_name':'Port Richmond', 'latitude':40.63306, 'longitude':-74.137156},
{'id':10, 'station_name':'PS 314', 'latitude':40.64182, 'longitude':-74.01871},
{'id':60, 'station_name':'Division Street', 'latitude':40.71445, 'longitude':-73.995206},
{'id':75, 'station_name':'PS 19', 'latitude':40.730043, 'longitude':-73.98445},
{'id':6, 'station_name':'PS 274', 'latitude':40.69454, 'longitude':-73.92769},
{'id':13, 'station_name':'Maspeth', 'latitude':40.72698, 'longitude':-73.89312},
{'id':62, 'station_name':'Queens College', 'latitude':40.736251, 'longitude':-73.821655},
{'id':64, 'station_name':'Queens Near Road', 'latitude':40.739264, 'longitude':-73.817694},
{'id':53, 'station_name':'Eisenhower Park', 'latitude':40.743156, 'longitude':-73.585513},
{'id':46, 'station_name':'Babylon', 'latitude':40.74523, 'longitude':-73.41921},
{'id':36, 'station_name':'Suffolk County', 'latitude':40.828022, 'longitude':-73.057548},
{'id':143, 'station_name':'Flax Pond', 'latitude':40.96095, 'longitude':-73.13899},
{'id':29, 'station_name':'Riverhead', 'latitude':40.96074, 'longitude':-72.712338},
{'id':73, 'station_name':'CCNY', 'latitude':40.819732, 'longitude':-73.948239},
{'id':66, 'station_name':'Morrisania', 'latitude':40.83078, 'longitude':-73.920059},
{'id':24, 'station_name':'IS 52', 'latitude':40.816178, 'longitude':-73.902002},
{'id':8, 'station_name':'IS 74', 'latitude':40.815517, 'longitude':-73.885552},
{'id':57, 'station_name':'NYBG', 'latitude':40.867985, 'longitude':-73.87808},
{'id':34, 'station_name':'White Plains', 'latitude':41.051896, 'longitude':-73.763648},
{'id':33, 'station_name':'Mt. Ninham', 'latitude':41.455895, 'longitude':-73.70974},
{'id':26, 'station_name':'Valley Central', 'latitude':41.523754, 'longitude':-74.215337},
{'id':25, 'station_name':'Millbrook', 'latitude':41.785533, 'longitude':-73.741326},
{'id':5, 'station_name':'Loudonville', 'latitude':42.68075, 'longitude':-73.75733},
{'id':1, 'station_name':'Albany County HD', 'latitude':42.642253, 'longitude':-73.754576},
{'id':35, 'station_name':'Stillwater', 'latitude':43.011906, 'longitude':-73.6491},
{'id':50, 'station_name':'Piseco Lake', 'latitude':43.449592, 'longitude':-74.516258},
{'id':40, 'station_name':'Whiteface Summit', 'latitude':44.36608, 'longitude':-73.90312},
{'id':39, 'station_name':'Whiteface Base', 'latitude':44.393136, 'longitude':-73.858953},
{'id':30, 'station_name':'Perch River', 'latitude':44.087461, 'longitude':-75.97319},
{'id':44, 'station_name':'East Syracuse', 'latitude':43.052351, 'longitude':-76.059185},
{'id':3, 'station_name':'Fulton', 'latitude':43.28428, 'longitude':-76.46318},
{'id':31, 'station_name':'Williamson', 'latitude':43.23085, 'longitude':-77.171381},
{'id':106, 'station_name':'Rochester Near Rd', 'latitude':43.145021, 'longitude':-77.557608},
{'id':45, 'station_name':'Pinnacle', 'latitude':42.091154, 'longitude':-77.209883},
{'id':52, 'station_name':'Middleport', 'latitude':43.22384, 'longitude':-78.478882},
{'id':79, 'station_name':'Tonawanda II', 'latitude':42.998136, 'longitude':-78.899312},
{'id':21, 'station_name':'Amherst', 'latitude':42.993275, 'longitude':-78.771475},
{'id':134, 'station_name':'Buffalo Near Road', 'latitude':42.92111, 'longitude':-78.76611},
{'id':19, 'station_name':'Buffalo', 'latitude':42.876951, 'longitude':-78.809743},
{'id':18, 'station_name':'Dunkirk', 'latitude':42.499697, 'longitude':-79.318805}]


def nearest_station(point):
    list_stations_d_km = []    
    for station in list_stations:
        d = distance_between(point, station)
        list_stations_d_km.append({"id": station['id'], "station_name": station['station_name'], "distance": d['km'] })
    station = minimum_distance(list_stations_d_km)
    return station


def minimum_distance(list_stations_d_km):
    min_d = list_stations_d_km[0]['distance']
    min_id = list_stations_d_km[0]['id']
    min_station_name = list_stations_d_km[0]['station_name']
    for d in list_stations_d_km:
        if d['distance'] < min_d:
            min_d = d['distance']
            min_id = d['id']
            min_station_name = d['station_name']
    return {"id": min_id, "station_name": min_station_name, "distance": min_d}
        
    
def distance_between(pos1, pos2):
    lat1 = float(pos1['latitude'])
    long1 = float(pos1['longitude'])
    lat2 = float(pos2['latitude']) 
    long2 = float(pos2['longitude'])

    degree_to_rad = float(pi / 180.0)

    d_lat = (lat2 - lat1) * degree_to_rad
    d_long = (long2 - long1) * degree_to_rad

    a = pow(sin(d_lat / 2), 2) + cos(lat1 * degree_to_rad) * cos(lat2 * degree_to_rad) * pow(sin(d_long / 2), 2)
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    km = 6367 * c
    mi = 3956 * c

    return {"km":km, "miles":mi}


def main():   
    df = pd.read_csv("../dataset-prueba-coordenadas-trafico.csv") 
    df.head(5)

    d = distance_between({"lat" : 2, "long": 2.5}, {"lat" : 2, "long": 3})
    print(f'Distancia => {d["km"]} km')



if __name__ == "__main__":
    os.system('cls')
    main()