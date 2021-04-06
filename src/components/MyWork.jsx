import React from 'react'
import { makeStyles } from '@material-ui/core'


export const MyWork = ({title, id}) => {
    const classes = useStyles();
    return (
        <div className={ classes.section }>
            My Work Page
        </div>
    )
}
const useStyles = makeStyles((theme)=>({
    section:{
        minHeight: "100vh",
    }
}))
