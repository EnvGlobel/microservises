import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import * as d3 from 'd3';

// d3.select() to select individual nodes.
// d3.selectAll() to select all objects of a type.

const cubejsApi = cubejs(
    'YOUR-CUBEJS-API-TOKEN',
    { apiUrl: 'http://localhost:4000/cubejs-api/v1' },
);

const Dashboard = () => {
    return <QueryRenderer
        query={{
            measures: [],
            dimensions: []
        }}
        cubejsApi={cubejsApi}
        render={({ resultSet }) => {
            if (!resultSet) {
                return <div>Dashboard</div>;
            }

            return (
                <div>{resultSet}</div>
            );
        }} />;
};

export default Dashboard;