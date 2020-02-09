import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Clients from './Components/Clients/Clients'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import Services from './Components/Services/Services'
import Navbar from './Components/Navbar/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />
        
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Clients">
            <Clients />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Services">
            <Services />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
