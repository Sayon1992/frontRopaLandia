import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,  Route} from "react-router-dom";
import FilaMuestra from './components/FilaMuestra';
import Registrarse from './components/Registrarse';
import Loguearse from './components/Loguearse';
import { CssBaseline } from '@material-ui/core';
//import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  return (
    <div>
      <CssBaseline />
      <Router>
        <Navbar />
        <Route exact path="/" component={FilaMuestra}/>
        <Route path="/Registrarse" component={Registrarse}/>
        <Route path="/Loguearse" component={Loguearse}/>
      </Router>
    </div>
  );
}

export default App;
