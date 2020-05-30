import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const Predictor = () => {
    const [viewport, setViewport] = React.useState({ center: [40.819732, -73.948239], zoom: 12 });

    return (
        <Map viewport={viewport} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </Map>
    );
};

export default Predictor;