import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './components/Login';
import Settings from './components/Settings';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/settings" component={ Settings } />
      </Switch>
    );
  }
}
