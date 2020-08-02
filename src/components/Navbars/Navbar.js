import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Tooltip, InputBase, useScrollTrigger } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SearchIcon from '@material-ui/icons/Search'
import {withRouter} from 'react-router';
import { ContextLogin } from '../../context/loginContext';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  root: {
      backgroundColor: '#0b032d',
      color:'black',
      boxShadow:'none',
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      },
      zIndex:1
  },
  buttonColor:{
      color: "#ebebeb"
  },
  menu:{
    position:'absolute',
    left:'122em'
  },
  inputRoot: {
    color: 'black',
    backgroundColor: '#dfdfdf',
    borderRadius: 10
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '40em',
    [theme.breakpoints.up('md')]: {
      width: '40em',
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: '30%',
    width:'40em',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
    zIndex: 0
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'black',
    zIndex: 1
  },
}))

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
  });

  return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
  });
}

function Navbar({ history }) {

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
    <React.Fragment>
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar className={classes.root}>
          <Toolbar>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <div className={classes.menu}>
              <Tooltip title="Ir al carrito">
                <Button>
                  <ShoppingCartIcon className={classes.buttonColor}/>
                </Button>
              </Tooltip>
              <Tooltip title="Mi cuenta">
                <Button color="inherit" onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true">
                  <AccountBoxIcon className={classes.buttonColor}/>
                </Button>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
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
        <MenuItem onClick={()=>{handleClose(); history.push('/miscompras')}}>Mis Compras</MenuItem>
        <MenuItem onClick={()=>{handleClose();desloguear();}}>Salir</MenuItem>
      </Menu>
    }
    </div>
    <div className={classes.navbarMargin}/>
    </React.Fragment>
  );
}
export default withRouter(Navbar);