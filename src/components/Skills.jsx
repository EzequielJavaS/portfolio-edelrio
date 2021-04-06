import React from 'react'
import { makeStyles } from '@material-ui/core'


export const Skills = ({title, id}) => {
    const classes = useStyles();
    return (
        <div className={ classes.section }>
            Skill Page
        </div>
    )
}
const useStyles = makeStyles((theme)=>({
    section:{
        minHeight: "100vh",
    }
}))
