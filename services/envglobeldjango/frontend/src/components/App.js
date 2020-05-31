import React from 'react';
import { createMuiTheme, Hidden, CircularProgress, ThemeProvider } from '@material-ui/core';
import { MemoryRouter, Route } from 'react-router-dom';
const Login = React.lazy(() => import('./Login'));
const ViewMobile = React.lazy(() => import('./ViewMobile'));
const ViewWeb = React.lazy(() => import('./ViewWeb'));


const App = () => {
    // Hooks
    const menuOptions = [{ name: "Dashboard", path: "/dashboard" }, { name: "Interactive Map", path: "/predictor" }];
    const [option, setOption] = React.useState(menuOptions[0]);

    // Misc
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#232323"
            },
            secondary: {
                //main: "#b47fa2"
                main: "#66de49"
            },
            action: {
                //selected: "#b47fa2"
                selected: "#66de49"
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <Hidden only={["xs"]}>
                    <React.Suspense fallback={<CircularProgress style={{ position: "absolute", left: "50%", top: "50%" }} />}>
                        <Route path="/dashboard">
                            <ViewWeb
                                selectedOption={option}
                                menuOptions={menuOptions}
                                setOption={setOption} />
                        </Route>
                        <Route exact path="/" component={Login} />
                    </React.Suspense>
                </Hidden>
                <Hidden only={["sm", "md", "lg", "xl"]}>
                    <React.Suspense fallback={<CircularProgress style={{ position: "absolute", left: "50%", top: "50%" }} />}>
                        <Route path="/dashboard">
                            <ViewMobile
                                selectedOption={option}
                                menuOptions={menuOptions}
                                setOption={setOption} />
                        </Route>
                        <Route exact path="/" component={Login} />
                    </React.Suspense>
                </Hidden>
            </MemoryRouter>
        </ThemeProvider>
    );
};

export default App;