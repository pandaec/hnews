import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Post from './components/Post';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'HW news'
    }
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <nav>
            <div className="nav-container">
              <div className="nav-back"><i className="fa fa-long-arrow-left"></i></div>
              <div className="nav-title">
                <span>
                  {this.state.title}
                </span>
              </div>
            </div>
          </nav>
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/post/:id" component={Post} />

      </Router>
    );
  }
}

export default App;
