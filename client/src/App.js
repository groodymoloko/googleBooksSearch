import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Search from './pages/Search';
import NoMatch from './pages/NoMatch'
import Bookshelf from './pages/Bookshelf';

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Search}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/bookshelf" component={Bookshelf}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
);

export default App;
