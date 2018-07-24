import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import indexPage from './components/indexPage';
import dashboard from './components/dashboard';
import Blog from './components/blog';
import Post from './components/post';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
	      <div>
	      	<Route exact path="/" component={indexPage} />
	      	<Route exact path="/dashboard" component={dashboard} />
          <Route exact path="/blog" component={Blog} />
	      </div>
      </Router>
    );
  }
}

export default App;
