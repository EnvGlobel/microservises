import React from 'react';
import cubejs from '@cubejs-client/core';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import GraphBar from './graphs/GraphBar';
import GraphLine from './graphs/GraphLine';
import ChartRenderer from './graphs/ChartRenderer';


const cubejsApi = cubejs(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyIiwiYXBwSWQiOiIxIiwiaWF0IjoxNTkwODU0ODU4LCJleHAiOjE1OTE3MTg4NTh9.NXb4GP7mNvkdwPJSHDMIrl_8qereqGHuEQfiSVVKMA4',
    { apiUrl: 'http://34.67.137.54/cubejs-api/v1' },
);

const Dashboard = () => {

    const graphs = [
        { elem: <ChartRenderer cubejsApi={cubejsApi} />, xs: 12 }
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