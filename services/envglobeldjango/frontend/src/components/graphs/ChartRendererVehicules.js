import React from "react";
import { QueryRenderer } from "@cubejs-client/react";
import { CircularProgress, useTheme } from "@material-ui/core";
import {
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
} from "recharts";

const CartesianChart = ({ resultSet, children, ChartComponent }) => (
  <ResponsiveContainer width="100%" height={240}>
    <ChartComponent data={resultSet.chartPivot()}>
      <XAxis dataKey="x" />
      <YAxis />
      <CartesianGrid />
      {children}
      <Legend />
      <Tooltip />
    </ChartComponent>
  </ResponsiveContainer>
);

const colors = ["#FF6492", "#141446", "#7A77FF"];

const lineRender = ({ resultSet }) => (
  <CartesianChart resultSet={resultSet} ChartComponent={LineChart}>
    {resultSet.seriesNames().map((series, i) => (
      <Line
        key={series.key}
        stackId="a"
        dataKey={series.key}
        name={series.title}
        stroke={colors[i]}
      />
    ))}
  </CartesianChart>
);

const renderChart = (Component) => ({ resultSet, error }) =>
  (resultSet && <Component resultSet={resultSet} />) ||
  (error && error.toString()) || (
    <CircularProgress
      style={{ position: "absolute", left: "50%", top: "50%" }}
    />
  );

const ChartRenderer = (props) => {
  const theme = useTheme();
  return (
    <QueryRenderer
      query={{
        "dimensions": [
            "Pollution.station"
        ],
        "timeDimensions": [
          {
            "dimension": "Pollution.measuredate",
            "dateRange": ["2017-01-01", "2017-12-31"],
            "granularity": "month"
          }
        ],
        "measures": ["Pollution.averageVehicleCount"],
        "filters": []
      }}
      cubejsApi={props.cubejsApi}
      render={renderChart(lineRender)}
    />
  );
};

export default ChartRenderer;
