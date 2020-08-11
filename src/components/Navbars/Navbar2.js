import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f96d80",
    color: "black",
    boxShadow: "none",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    marginTop: 60,
    zIndex: 0,
  },
  buttonColor: {
    color: "#ebebeb",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menu: {
    marginLeft: "auto",
  },
  tabHolder: {
    alignSelf: "center",
  },
  tabs: {
    fontFamily: "Roboto Condensed",
    fontWeight: 700,
    color: "white",
  },
}));

function Navbar2({ history }) {
  const switchPages = (page) => {
    switch (page) {
      case 0:
        history.push("/infantil");
        break;
      case 1:
        history.push("/mujer");
        break;
      case 2:
        history.push("/hombres");
        break;
      case 3:
        history.push("/");
        break;
      case 4:
        history.push("/ofertas");
        break;
      case 5:
        history.push("/envios");
        break;
      case 6:
        history.push("/contacto");
        break;
      default:
        break;
    }
  };

  const classes = useStyles();

  const [tabValue, setTabValue] = useState(3);

  const handleChange = (e, value) => {
    setTabValue(value);
    switchPages(value);
  };

  return (
    <React.Fragment>
      <AppBar position="absolute" className={classes.root}>
        <Toolbar className={classes.tabHolder}>
          <Tabs value={tabValue} onChange={handleChange}>
            <Tab className={classes.tabs} label="Infantil" />
            <Tab className={classes.tabs} label="Mujer" />
            <Tab className={classes.tabs} label="Hombres" />
            <Tab className={classes.tabs} label="Tendencias" />
            <Tab className={classes.tabs} label="Ofertas" />
            <Tab className={classes.tabs} label="Envios" />
            <Tab className={classes.tabs} label="Contactos" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
export default withRouter(Navbar2);
