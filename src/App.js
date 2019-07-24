import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Post from './components/Post';
import './App.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>HNews</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Route path="/" exact component={Home} />
      <Route path="/post/:id" component={Post} />

    </Router>
  );
}

export default App;
