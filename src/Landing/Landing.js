import logo from '../logo.svg';
import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";


class Landing extends Component {
  openHome = () => {
    this.props.history.push("/home");
  }

  callPropsFunc = ()=>{
    this.props.sharedFunc();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Nice rotating stuff.
        </p>
          <a
            className="App-link"
            onClick={this.openHome}
            rel="noopener noreferrer"
          >
            Go Home
        </a>
        </header>
      </div>
    );
  }
}

export default withRouter(Landing);
