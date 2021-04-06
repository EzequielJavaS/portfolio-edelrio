import React from 'react'
import { makeStyles } from '@material-ui/core'


export const Header = ({id}) => {
    const classes = useStyles();
    return (
        <div className={ classes.section }>
            Header Page
        </div>
    )
}
const useStyles = makeStyles((theme)=>({
    section:{
        minHeight: "100vh",
    }
}))

