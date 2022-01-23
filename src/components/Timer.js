import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timerFinish } from '../actions';

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
    const { isFinalTime } = this.props;

    setInterval(() => {
      const { timer } = this.state;
      if (timer > 0) {
        this.setState((prevState) => ({
          timer: prevState.timer - 1,
        }));
      } else {
        isFinalTime(); // se acabar o tempo ele dispara essa função
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
  isFinalTime: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  isFinalTime: () => dispatch(timerFinish()), // dispara a action para tornar o timerFinish true.
});

export default connect(null, mapDispatchToProps)(Timer);
