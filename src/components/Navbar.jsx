import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../images/favi152.png';

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <img src={logo} alt="Logo"/>
            </Toolbar>
        </AppBar>
    )
}
