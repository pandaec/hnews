import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Post from './components/Post';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" component={Post} />

      </Router>
    );
  }
}

export default App;
