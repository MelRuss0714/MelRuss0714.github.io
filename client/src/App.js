import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

//import components
import Home from './components/Home/Home.js'
import Portfolio from './components/Portfolio/Portfolio.js'
import Resume from './components/Resume/Resume.js'
import Contact from './components/Contact/Contact.js'
import About from './components/About/About'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
      </div>
    );
  }
}

export default App;
