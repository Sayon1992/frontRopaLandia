import React, {useState} from 'react'
import { makeStyles, AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import pageContext from '../PaginaContext';
import { BrowserRouter as Router} from "react-router-dom";
import {withRouter} from 'react-router';

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
  shoppingCart: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

function Navbar({history}) {
  const classes = useStyles();

  const [botonMenu, setBotonMenu] = React.useState(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const [page, setPage] = useState()

  const handleClick = (event) => {
    setBotonMenu(event.currentTarget);
    setMenuOpen(true)
  };

  const handleClose = () => {
    setMenuOpen(false)
  };

  const setRegistrarse = () => {
    setPage('/Registrarse')
  };

  const setLoguearse = () => {
    setPage('/Loguearse')
  };


  return (
    <Router>
    <div className={classes.root}>
      <pageContext.Provider value={{status: page}}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button><ShoppingCartIcon className={classes.shoppingCart}></ShoppingCartIcon></Button>
          <Button color="inherit" onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true">
            <AccountBoxIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={botonMenu}
        keepMounted
        open={menuOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={()=>{handleClose(); setLoguearse()}}>Loguearse</MenuItem>
        <MenuItem onClick={()=>{handleClose(); setRegistrarse(); history.push("/Registrarse")}}>Registrarse</MenuItem>
      </Menu>
      </pageContext.Provider>
    </div>
    </Router>
  );
}
export default withRouter(Navbar);