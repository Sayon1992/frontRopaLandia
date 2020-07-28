import React from 'react';
import {Drawer} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root:{
        width: 300,
        backgroundColor:"grey",
        color:"pink",
        opacity: '50%'
    }
}));

const CompDrawer = (props) => {

    const classes = useStyles()

    return(
        <Drawer
        variant="permanent"
        classes={{
            root: classes.root,
            paper: classes.root,
        }}
        anchor="left"
        >
            
        </Drawer>
    )
}

export default CompDrawer;