import React, {useState, useContext } from 'react';
import { makeStyles, AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { BrowserRouter as Router} from "react-router-dom";
import {withRouter} from 'react-router';
import { ContextLogin } from '../context/loginContext';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#faeee7',
    color:'black',
    boxShadow:'none',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menu:{
    marginLeft: 'auto'
  }
}));

function Navbar({history}) {

  const classes = useStyles();

  const {logueado, setLogueado} = ContextLogin();

  const [botonMenu, setBotonMenu] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick(event){
    console.log(event)
    setBotonMenu(event.currentTarget);
    setMenuOpen(true)
  };

  const handleClose = () => {
    setMenuOpen(false)
  };
  
  const desloguear = () => {
    setLogueado(false)
    window.localStorage.clear();
  }


  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.menu}>
            <Button><ShoppingCartIcon /></Button>
            <Button color="inherit" onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true">
              <AccountBoxIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {logueado === false?
      <Menu
        id="simple-menu"
        anchorEl={botonMenu}
        keepMounted
        open={menuOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      > 
        <MenuItem onClick={()=>{handleClose(); history.push("/Loguearse")}}>Loguearse</MenuItem>
        <MenuItem onClick={()=>{handleClose(); history.push("/Registrarse")}}>Registrarse</MenuItem>
      </Menu>
      : 

      <Menu
        id="simple-menu"
        anchorEl={botonMenu}
        keepMounted
        open={menuOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      > 
        <MenuItem onClick={()=>{handleClose(); }}>Configuraciones</MenuItem>
        <MenuItem onClick={()=>{handleClose();desloguear() ;history.push('/loguearse')}}>Salir</MenuItem>
      </Menu>
    }
    </div>
    </Router>
  );
}
export default withRouter(Navbar);