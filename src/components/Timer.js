import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTheTimer } from '../actions';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
    };
  }

  componentDidMount() {
    this.startTimer(); // inica o contador
  }

  startTimer = () => {
    const SET_INTERVAL = 1000;
    const { setTimer } = this.props;

    setInterval(() => {
      const { timer } = this.state;
      if (timer > 0) {
        this.setState((prevState) => ({
          timer: prevState.timer - 1,
        }));
        setTimer(timer);
      } else {
        setTimer(0);
      }
    }, SET_INTERVAL);
  }

  render() {
    const { timer } = this.state;
    return (
      <div>
        { timer }
      </div>
    );
  }
}

Timer.propTypes = {
  setTimer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setTimer: (tempo) => dispatch(setTheTimer(tempo)), // dispara a action para tornar o timerFinish true.
});

export default connect(null, mapDispatchToProps)(Timer);
