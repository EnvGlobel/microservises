import React from 'react';
import cubejs from '@cubejs-client/core';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import ChartRendererBP from './graphs/ChartRendererBP';
import ChartRendererO3 from './graphs/ChartRendererO3';
import ChartRendererRH from './graphs/ChartRendererRH';
import ChartRendererTemp from './graphs/ChartRendererTemp';
import ChartRendererVehicules from './graphs/ChartRendererVehicules';


const cubejsApi = cubejs(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyIiwiYXBwSWQiOiIxIiwiaWF0IjoxNTkwODU0ODU4LCJleHAiOjE1OTE3MTg4NTh9.NXb4GP7mNvkdwPJSHDMIrl_8qereqGHuEQfiSVVKMA4',
    { apiUrl: 'http://34.67.137.54/cubejs-api/v1' },
);

const Dashboard = () => {

    const graphs = [
        { elem: <ChartRendererBP cubejsApi={cubejsApi} />, xs: 3 },
        { elem: <ChartRendererO3 cubejsApi={cubejsApi} />, xs: 3 },
        { elem: <ChartRendererRH cubejsApi={cubejsApi} />, xs: 3 },
        { elem: <ChartRendererTemp cubejsApi={cubejsApi} />, xs: 3 },
        { elem: <ChartRendererVehicules cubejsApi={cubejsApi} />, xs: 3 }
    ];

    return (
        <Grid
            container
            spacing={1}
            justify="space-around"
            alignItems="flex-start"
            style={{
                backgroundColor: "#e6e6e6"
            }}
        >
            {graphs && graphs.map((graph, index) => {
                return (
                    <Grid key={index} item xs={graph.xs}>
                        <Card>
                            <CardContent>
                                {graph.elem}
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Dashboard;