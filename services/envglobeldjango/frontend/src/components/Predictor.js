import React from 'react';
// import 'date-fns';
import {
    CircularProgress, Grid
} from '@material-ui/core';
// import {
//     MuiPickersUtilsProvider, KeyboardTimePicker,
//     KeyboardDatePicker
// } from '@material-ui/pickers';
import { Map, Marker, Circle, Popup, TileLayer } from 'react-leaflet';
// import DateFnsUtils from '@date-io/date-fns';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';

const Predictor = () => {
    const [viewport, setViewport] = React.useState({ center: [40.819732, -73.948239], zoom: 12 });
    const [date, setDate] = React.useState(new Date("2017-09-23"));

    // Misc

    const cubejsApi = cubejs(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyIiwiYXBwSWQiOiIxIiwiaWF0IjoxNTkwODU0ODU4LCJleHAiOjE1OTE3MTg4NTh9.NXb4GP7mNvkdwPJSHDMIrl_8qereqGHuEQfiSVVKMA4',
        { apiUrl: 'http://34.67.137.54/cubejs-api/v1' },
    );


    return (
        <Map viewport={viewport} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <QueryRenderer
                query={{
                    measures: [
                        "Pollution.averageO3",
                        "Pollution.averageBp",
                        "Pollution.averageTemp",
                        "Pollution.averageRh"
                    ],
                    dimensions: [
                        "PollutionStation.name",
                        "PollutionStation.latitude",
                        "PollutionStation.longitude",
                        "Pollution.o3",
                        "Pollution.bp",
                        "Pollution.rh",
                        "Pollution.temp"
                    ],
                    timeDimensions: [
                        {
                            dimension: "Pollution.measuredate",
                            dateRange: ["2017-09-23"],
                            granularity: "day"
                        }
                    ],
                }}
                cubejsApi={cubejsApi}
                render={({ resultSet }) => {
                    if (!resultSet) {
                        return <CircularProgress style={{ position: "absolute", left: "50%", top: "50%" }} />;
                    }

                    return (
                        <React.Fragment>
                            {resultSet.tablePivot().map((fila, index) => {
                                return (
                                    <React.Fragment>
                                        <Marker key={index} position={[fila['PollutionStation.latitude'], fila['PollutionStation.longitude']]}>
                                            <Popup>
                                                Station: {fila['PollutionStation.name']}
                                                <br></br>
                                                O3: {fila['Pollution.averageO3']}
                                                <br></br>
                                                BP: {fila['Pollution.averageBp']}
                                                <br></br>
                                                Temperatura: {fila['Pollution.averageTemp']}
                                                <br></br>
                                                Rh: {fila['Pollution.averageRh']}
                                            </Popup>
                                        </Marker>
                                        <Circle key={index + "circle"} center={[fila['PollutionStation.latitude'], fila['PollutionStation.longitude']]} radius={(fila['PollutionStation.radius']) ? fila['PollutionStation.latitude'] : 10} color={"#1211ff"} fillColor="#fff" />
                                    </React.Fragment>
                                );
                            })}
                        </React.Fragment>
                    );
                }} />
        </Map>
        // <MuiPickersUtilsProvider utils={DateFnsUtils}>
        //     <Grid container justify="space-around">
        //         <KeyboardDatePicker
        //             disableToolbar
        //             variant="inline"
        //             format="MM/dd/yyyy"
        //             margin="normal"
        //             id="date-picker-inline"
        //             label="Date picker inline"
        //             value={date}
        //             onChange={(e) => setDate(e)}
        //             KeyboardButtonProps={{
        //                 'aria-label': 'change date',
        //             }}
        //         />
        //         <KeyboardDatePicker
        //             margin="normal"
        //             id="date-picker-dialog"
        //             label="Date picker dialog"
        //             format="MM/dd/yyyy"
        //             value={date}
        //             onChange={(e) => setDate(e)}
        //             KeyboardButtonProps={{
        //                 'aria-label': 'change date',
        //             }}
        //         />
        //         <KeyboardTimePicker
        //             margin="normal"
        //             id="time-picker"
        //             label="Time picker"
        //             value={date}
        //             onChange={(e) => setDate(e)}
        //             KeyboardButtonProps={{
        //                 'aria-label': 'change time',
        //             }}
        //         />
        //     </Grid>
        // </MuiPickersUtilsProvider>
    );
};

export default Predictor;