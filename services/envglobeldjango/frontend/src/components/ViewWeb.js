import React from 'react';
import { Drawer, List, ListSubheader, ListItem, ListItemText, ListItemIcon, useTheme, Divider } from '@material-ui/core';
import { Help } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import Content from './Content';

const ViewWeb = (props) => {

    // Hooks
    const theme = useTheme();
    let history = useHistory();

    // // Misc
    const drawerWidth = "240px";

    return (
        <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%" }}>
            <Drawer
                variant="persistent"
                open={true}
                anchor="left"
                style={{
                    width: drawerWidth,
                }}
                PaperProps={{
                    square: true,
                    style: {
                        width: drawerWidth,
                        backgroundColor: theme.palette.primary.main,
                        color: "#FFFFFF",
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                    },
                }}>
                <List
                    style={{ display: "flex", flexDirection: "column", height: "100%", padding: 0, margin: 0 }}
                    dense={false}
                    subheader={
                        <ListSubheader color="inherit">EnvGlobel</ListSubheader>
                    }>
                    {props.menuOptions.map((element, index) => {
                        return (
                            <ListItem
                                key={index}
                                button={true}
                                selected={props.selectedOption.name === element.name}
                                onClick={() => { props.setOption(element); history.replace(element.path) }}>
                                <ListItemText primary={element.name} />
                            </ListItem>
                        )
                    })}
                    <Divider style={{ flexGrow: 1 }} />
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <ListItem
                            onClick={() => { }}
                            button={true}
                            style={{ width: "80%" }}
                        >
                            <ListItemText primary={"Sign In"} />
                        </ListItem>
                        <ListItem
                            onClick={() => { }}
                            button={true}
                            style={{ width: "20%" }}
                            selected={true}
                            alignItems="center"
                        >
                            <Help />
                        </ListItem>
                    </div>
                </List>
            </Drawer>
            <Content />
        </div >
    );
};

export default ViewWeb;