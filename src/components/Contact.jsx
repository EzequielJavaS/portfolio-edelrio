import React from 'react'
import { makeStyles } from '@material-ui/core'


export const Contact = ({title, id}) => {
    const classes = useStyles();
    return (
        <div className={ classes.section }>
            Contact Page
        </div>
    )
}

const useStyles = makeStyles((theme)=>({
    section:{
        minHeight: "100vh",
    }
}))
