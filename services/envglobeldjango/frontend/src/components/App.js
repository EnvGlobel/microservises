import React from 'react';
import { createMuiTheme, Hidden, CircularProgress, ThemeProvider } from '@material-ui/core';
import { MemoryRouter, Route } from 'react-router-dom';
const ViewMobile = React.lazy(() => import('./ViewMobile'));
const ViewWeb = React.lazy(() => import('./ViewWeb'));

const App = () => {
    // Hooks
    const menuOptions = [{ name: "Dashboard", path: "/" }, { name: "Interactive Map", path: "/predictor" }];
    const [option, setOption] = React.useState(menuOptions[0]);

    // Misc
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#232323"
            },
            secondary: {
                main: "#b47fa2"
            },
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <Hidden only={["xs"]}>
                    <React.Suspense fallback={<CircularProgress style={{ position: "absolute", left: "50%", top: "50%" }} />}>
                        <Route path="/">
                            <ViewWeb
                                selectedOption={option}
                                menuOptions={menuOptions}
                                setOption={setOption} />
                        </Route>
                    </React.Suspense>
                </Hidden>
                <Hidden only={["sm", "md", "lg", "xl"]}>
                    <React.Suspense fallback={<CircularProgress style={{ position: "absolute", left: "50%", top: "50%" }} />}>
                        <Route path="/">
                            <ViewMobile
                                selectedOption={option}
                                menuOptions={menuOptions}
                                setOption={setOption} />
                        </Route>
                    </React.Suspense>
                </Hidden>
            </MemoryRouter>
        </ThemeProvider>
    );
};

export default App;