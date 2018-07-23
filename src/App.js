import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import indexPage from './components/indexPage';
import dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
	      <div>
	      	<Route exact path="/" component={indexPage} />
	      	<Route exact path="/dashboard" component={dashboard} />
	      </div>
      </Router>
    );
  }
}

export default App;
