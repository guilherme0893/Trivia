import React from 'react';
import { Route, Switch } from 'react-router';
import logo from './trivia.png';
import './App.css';
import Login from './components/Login';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </header>
    </div>
  );
}
