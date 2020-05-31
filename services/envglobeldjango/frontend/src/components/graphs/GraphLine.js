import React from 'react';
import { CircularProgress,useTheme } from '@material-ui/core';
import { QueryRenderer } from '@cubejs-client/react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

const GraphLine = (props) => {

    const theme = useTheme();

    return (
        <QueryRenderer
            query={{
                measures: [],
                dimensions: [
                    "PollutionStation.name",
                    "PollutionStation.latitude",
                    "PollutionStation.longitude"
                ]
            }}
            cubejsApi={props.cubejsApi}
            render={({ resultSet }) => {
                if (!resultSet) {
                    return <CircularProgress style={{ position: "absolute", left: "50%", top: "50%" }} />;
                }

                return (
                    <LineChart
                        width={1000}
                        height={300}
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                );
            }} />);
};

export default GraphLine;
