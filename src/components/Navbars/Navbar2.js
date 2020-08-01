import React, {useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router} from "react-router-dom";
import {withRouter} from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
      backgroundColor: '#0b032d',
      color:'black',
      boxShadow:'none',
      display: "flex",
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      },
      marginTop:60,
      zIndex:0
  },
  buttonColor:{
      color: "#ebebeb"
  },
  menuButton: {
      marginRight: theme.spacing(2)
  },
  menu:{
      marginLeft: 'auto'
  },
  tabHolder:{
      alignSelf:'center'
  },
  tabs:{
      fontFamily:'Roboto Condensed',
      fontWeight:700,
      color:'white'
  }
}))

function Navbar2({history}) {

  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (e, value) => {
      setTabValue(value)
  }
  
  return (
    <Router>
      <AppBar position="absolute" className={classes.root}>
        <Toolbar className={classes.tabHolder}>
            <Tabs value={tabValue} onChange={handleChange}>
                <Tab className={classes.tabs} label="Infantil"/>
                <Tab className={classes.tabs} label="Mujer"/>
                <Tab className={classes.tabs} label="Hombres"/>
                <Tab className={classes.tabs} label="Tendencias"/>
                <Tab className={classes.tabs} label="Ofertas"/>
                <Tab className={classes.tabs} label="Envios"/>
                <Tab className={classes.tabs} label="Contactos"/>
            </Tabs>
        </Toolbar>
      </AppBar>
    </Router>
  );
}
export default withRouter(Navbar2);