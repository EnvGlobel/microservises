import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
const Dashboard = React.lazy(() => import('./Dashboard'));
const Predictor = React.lazy(() => import('./Predictor'));

const Content = () => {
    return (
        <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            overflow: "hidden",
        }}>
            <Switch>
                <React.Suspense fallback={<CircularProgress style={{ position: "absolute", left: "50%", top: "50%" }} />}>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/predictor" component={Predictor} />
                </React.Suspense>
            </Switch>
        </div>
    );
};

export default Content;