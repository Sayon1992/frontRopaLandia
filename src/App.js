import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import PaginaPrincipal from "./components/PaginaPrincipal";
import Registrarse from "./components/login/Registrarse";
import Loguearse from "./components/login/Loguearse";
import AltaProducto from "./components/productos/AltaProducto";
import { CssBaseline } from "@material-ui/core";
import { LoginContext } from "./context/loginContext";
import VerTienda from "./components/tiendas/VerTienda";
import Navbar from "./components/Navbars/Navbar";
import Navbar2 from "./components/Navbars/Navbar2";
import VerProducto from "./components/productos/VerProducto";
//import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const [logueado, setLogueado] = useState(false);
  const [navbar, setNavbar] = useState(true);

  useEffect(() => {
    var saveData = JSON.parse(localStorage.saveData || null) || {};
    if (
      saveData.obj !== null &&
      saveData.obj !== "" &&
      saveData.obj !== undefined &&
      saveData.obj !== {}
    ) {
      setLogueado(true);
    } else {
      setLogueado(false);
    }
    return () => {};
  }, [logueado]);

  return (
    <div>
      <LoginContext.Provider
        value={{ logueado, setLogueado, navbar, setNavbar }}
      >
        <CssBaseline />
        {navbar === true ? (
          <React.Fragment>
            <Navbar />
            <Navbar2 />
          </React.Fragment>
        ) : (
          <Navbar />
        )}
        <Route exact path="/" component={PaginaPrincipal} />
        <Route exact path="/Registrarse" component={Registrarse} />
        <Route exact path="/Loguearse" component={Loguearse} />
        <Route exact path="/ProductoTest" component={AltaProducto} />
        <Route path="/VerTienda" component={VerTienda} />
        <Route path="/VerProducto" component={VerProducto} />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
