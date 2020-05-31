import React from 'react';
import { CircularProgress} from '@material-ui/core';
import { QueryRenderer } from '@cubejs-client/react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const GraphBar = (props) => {
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

                const testData = [
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

                return (
                    <ResponsiveContainer width={300} height={300}>
                        <BarChart width={730} height={250} data={testData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                );
            }} />
    );
};

export default GraphBar;