import React, {useState, useEffect} from 'react';
import './App.css';
import {Route} from "react-router-dom";
import PaginaPrincipal from './components/PaginaPrincipal';
import Registrarse from './components/login/Registrarse';
import Loguearse from './components/login/Loguearse';
import AltaProducto from './components/productos/AltaProducto'
import { CssBaseline } from '@material-ui/core';
import { LoginContext } from "./context/loginContext";
//import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const [logueado, setLogueado] = useState(false)

  useEffect(() => {
    var saveData = JSON.parse(localStorage.saveData || null) || {};
    if(saveData.obj !== null && saveData.obj !== "" && saveData.obj !== undefined && saveData.obj !== {}){
      setLogueado(true);
    }else{
      setLogueado(false);
    }
    return () => {}
  }, [logueado])

  return (
    <div>
      <LoginContext.Provider value={{logueado, setLogueado}}>
      <CssBaseline />
          <Route exact path="/" component={PaginaPrincipal}/>
          <Route path="/Registrarse" component={Registrarse}/>
          <Route path="/Loguearse" component={Loguearse}/>
          <Route path="/ProductoTest" component={AltaProducto}/>
      </LoginContext.Provider>
    </div>
  );
}

export default App;