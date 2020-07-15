import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,  Route} from "react-router-dom";
import FilaMuestra from './components/FilaMuestra';
import Registrarse from './components/Registrarse';
import Loguearse from './components/Loguearse';
import AltaProducto from './components/productos/AltaProducto'
import { CssBaseline } from '@material-ui/core';
import { LoginContext } from "./context/loginContext";
//import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const [logueado, setLogueado] = useState(false)

  return (
    <div>
      <LoginContext.Provider value={{logueado, setLogueado}}>
      <CssBaseline />
          <Navbar />
          <Route exact path="/" component={FilaMuestra}/>
          <Route path="/Registrarse" component={Registrarse}/>
          <Route path="/Loguearse" component={Loguearse}/>
          <Route path="/ProductoTest" component={AltaProducto}/>
      </LoginContext.Provider>
    </div>
  );
}

export default App;