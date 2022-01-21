import React, { Component } from 'react';
import Header from '../components/Header';
import GameBody from '../components/GameBody';

class MainGame extends Component {
  render() {
    return (
      <div>
        Welcome
        <Header />
        <GameBody />
      </div>
    );
  }
}

export default MainGame;
