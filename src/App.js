import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,  Switch,  Route,  Link as RouterLink } from "react-router-dom";
import FilaMuestra from './components/FilaMuestra';
import Registrarse from './components/Registrarse';
import {withRouter} from 'react-router';
//import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const ShowTheLocationWithRouter = withRouter(Navbar);
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/" component={FilaMuestra}></Route>
        <Route path="/Registrarse" component={Registrarse}/>
      </Router>
    </div>
  );
}

export default App;
