import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './components/Pages/Home.js';
import Beer from './components/Pages/Beer.js';
import Whisky from './components/Pages/Whisky';
import CockTails from './components/Pages/CockTails';
import Sutta from './components/Pages/Sutta';
import Signup from './components/Pages/Signup';

function App() {

  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Beer' component={Beer} />
      <Route path='/Whiskey' component={Whisky} />
      <Route path='/CockTails' component={CockTails} />
      <Route path='/Sutta' component={Sutta} />
      <Route path='/Sign-up' component={Signup} />
      
    </Switch>
    </Router>
      
    </>
  );
  
}

export default App;
