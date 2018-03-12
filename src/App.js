import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import { login } from './fakeAuth';


const App = () => (
  <div>
    <NavBar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/menu" component={Menu} />
    <Route component={NoMatch} />
    </Switch>
  </div>
);


export default App;
