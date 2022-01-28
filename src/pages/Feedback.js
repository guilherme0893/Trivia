import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BackToLoginButton from '../components/BackToLoginBtn';
import GoToRanking from '../components/GoToRankingBn';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">
          Feedback
        </h1>
        <p data-testid="feedback-total-score">
          { score }
        </p>
        <p data-testid="feedback-total-question">
          { assertions }
        </p>
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

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
