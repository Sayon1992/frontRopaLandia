import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import pageContext from '../PaginaContext';
import Link from '@material-ui/core/Link';
import { BrowserRouter as Router,  Switch,  Route,  Link as RouterLink } from "react-router-dom";
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
        <RouterLink to="/Registrarse"><MenuItem onClick={()=>{handleClose(); setRegistrarse()}}>Registrarse</MenuItem></RouterLink>
      </Menu>
      </pageContext.Provider>
    </div>
    </Router>
  );
}
export default withRouter(Navbar);