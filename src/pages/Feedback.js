import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackToLoginButton from '../components/BackToLoginBtn';
import GoToRanking from '../components/GoToRankingBn';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">
          Feedback
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
