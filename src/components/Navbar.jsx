import React from 'react';
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../images/favi152.png';

export const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} alt="Logo"/>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme)=>({
    root:{
        backgroundColor: "#fafafa",
    },

    toolbar:{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"

    },


    logo:{
        height: "2.8rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        }
    }
  }))
