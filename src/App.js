import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Header from './Components/header';
import './App.css';

class App extends Component {
  render() {
    return (
     <div className="App">
    <Router>
      <div>
        <Route path="/App" component={Header} />
        <Route path="/App/Profile" component={Profile} />
        <Route path="/App/Resume" component={Resume} />
        <Route path="/App/Contact" component={Contact} />
      </div>
    </Router>
  </div>
    );
  }
}

export default App;