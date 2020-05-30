import React from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import Content from './Content';

const ViewMobile = (props) => {

    // Hooks
    const [menux, setMenux] = React.useState(null);
    let history = useHistory();

    // Misc


    // Functions
    const openMenu = (event) => {
        setMenux(event.currentTarget);
    }

    const closeMenu = (element) => {
        setMenux(null);
        props.setOption(element);
    }

    React.useEffect(() => {
        return (() => { });
    });

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="secondary" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {props.selectedOption.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Menu
                id="simple-menu"
                anchorEl={menux}
                keepMounted
                open={Boolean(menux)}
                onClose={() => closeMenu(props.selectedOption)}
            >
                {props.menuOptions.map((element, index) => {
                    return <MenuItem key={index} onClick={() => { closeMenu(element); history.replace(element.path) }}>{element.name}</MenuItem>
                })}
            </Menu>
            <Content />
        </React.Fragment>
    );
};

export default ViewMobile;