import React from 'react';
import { Drawer, List, ListSubheader, ListItem, ListItemText, useTheme } from '@material-ui/core';
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
                    dense={false}
                    subheader={
                        <ListSubheader color="inherit">Training Django React</ListSubheader>
                    }>
                    {props.menuOptions.map((element, index) => {
                        return (
                            <ListItem
                                key={index}
                                button={true}
                                style={{
                                    selected: {
                                        backgroundColor: "red",
                                    },
                                }}
                                selected={props.selectedOption.name === element.name}
                                onClick={() => { props.setOption(element); history.replace(element.path) }}>
                                <ListItemText primary={element.name} />
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
            <Content />
        </div>
    );
};

export default ViewWeb;