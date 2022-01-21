import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackToLoginButton from '../components/BackToLoginBtn';
import GoToRanking from '../components/GoToRankingBn';

class Feedback extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">
          Ranking
        </h1>
        <Link to="/">
          <BackToLoginButton />
        </Link>
        <Link to="/ranking">
          <GoToRanking />
        </Link>
      </div>
    );
  }
}

export default Feedback;
