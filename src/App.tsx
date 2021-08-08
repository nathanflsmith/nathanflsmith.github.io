import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
            </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Home}/>
        <Route path="/resume" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
