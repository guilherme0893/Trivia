import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './components/Login';
import MainGame from './pages/MainGame';
import Settings from './pages/Settings';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/main" component={ MainGame } />
        <Route exact path="/settings" component={ Settings } />
      </Switch>
    );
  }
}