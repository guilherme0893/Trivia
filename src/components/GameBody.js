import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestQuestionsThunk } from '../actions/index';

class GameBody extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     question: [],
  //   };
  // }

  // componentDidMount() {
  //   // const { token, requestQuestions } = this.props;
  //   // requestQuestions(token);
  //   this.loadQuestions();
  // }

  // loadQuestions() {
  //   const { questions } = this.props;
  // }

  // shuffleQuestions(arrayOfQuestions) {
  //   // cria um array com posições aleatórias
  //   // https://flaviocopes.com/how-to-shuffle-array-javascript/
  //   // https://www.delftstack.com/pt/howto/javascript/shuffle-array-javascript/
  //   const randomConstant = 0.5;
  //   // o sort organiza e o math random cria aleatoriedade
  //   const shuffledQuestions = arrayOfQuestions.sort(() => Math.random() - randomConstant);
  //   return shuffledQuestions;
  // }

  render() {
    // const { questions } = this.props;

    return (
      <div>
        <div>
          <p data-testid="question-category">{0}</p>
          <p data-testid="question-text">{0}</p>
        </div>
        <div data-testid="answer-options">
          {0}
        </div>
      </div>
    );
  }
}

// enviar as questões e outros dados
const mapStateToProps = (state) => ({
  questions: state.questions,
  // token: state.token,
  // score: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  // changeScore: (score) => dispatch(getScoreAction(score)),
  requestQuestions: (token) => dispatch(requestQuestionsThunk(token)),
});

GameBody.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  // changeScore: PropTypes.func.isRequired,
  // score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBody);
