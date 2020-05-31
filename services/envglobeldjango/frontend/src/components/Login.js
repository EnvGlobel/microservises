import React from 'react';
import { Button, Card, CardContent, Divider, TextField, Typography } from '@material-ui/core'
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function signIn() {
        axios.post('http://34.67.137.54/', { username, password });
    }

    return (
        <div style={{ width: "100%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center" }}>
            <Card style={{ width: "300px", height: "300px", display: "flex", flexDirection: "column" }}>
                <CardContent style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
                    <Typography variant="h5">Sign In</Typography>
                    <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <TextField type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Divider style={{ flexGrow: 1, backgroundColor: "white" }} />
                    <Button style={{}} variant="contained" color="secondary" onClick={() => signIn()}>
                        <Typography style={{ color: "white" }}>Send</Typography>
                    </Button>
                </CardContent>
            </Card>
        </div>

    );
};

export default Login;