import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './Landing/Landing';


class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/home" exact component={Home}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
