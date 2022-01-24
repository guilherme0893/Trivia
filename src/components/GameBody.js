import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getScoreAction } from '../actions/index';
import Timer from './Timer';

class GameBody extends Component {
  constructor() {
    super();

    this.state = {
      isAnswered: false,
      number: 0,
      gameFinished: false,
    };
  }

  isQuestionAnswered = (event) => {
    // const { isAnswered } = this.state;
    if (event.target) {
      this.setState({
        isAnswered: true,
      });
    }
  }

  goToNextQuestion = () => {
    const lastQuestion = 4;
    // const { history } = this.props;
    const { number } = this.state;

    if (number === lastQuestion) {
      this.setState({
        gameFinished: true,
      });
      // history.push('/feedback');
    } else {
      this.setState({
        isAnswered: false,
        number: number + 1,
        gameFinished: false,
      }, () => this.shuffledAnswer());
    }
  }

  // changeScore = ({ target }) => {
  //   // peso de cada dificuldade para o score mudar
  //   const values = {
  //     easy: 1,
  //     medium: 2,
  //     hard: 3,
  //   };
  //   const dez = 10;
  //   const { number } = this.state;
  //   const { score, assertions, changeScore } = this.props;
  //   const { questions } = this.props;
  //   // pega a dificuldade de cada pergunta
  //   const { difficulty } = questions[number];

  //   if (target.value === questions[number].correct_answer) {
  //     // se acertou aumentar os acertos e o placar mudar
  //     //  10 + (timer * dificuldade)
  //     // changeScore((assertions + 1), (score + dez + (counter * values[difficulty])));
  //     changeScore((assertions + 1), (score + dez));
  //   }
  //   localStorage.setItem('score', JSON.stringify(score));
  // }

  shuffledAnswer = () => {
    const { questions, getTimer } = this.props;
    // devido aos problemas de percorrer o array, com o number nao quebra a aplicação
    const { number } = this.state;
    console.log(questions);
    console.log(typeof questions);
    console.log(questions[0]);
    console.log(questions[number]); // funciona!
    console.log(questions[3]);

    let testid;
    let nameClass;
    let answers = [];
    console.log(questions.length);
    if (questions.length > 0) {
      answers = [
        questions[number].correct_answer,
        ...questions[number].incorrect_answers, // spread porque pode haver ate 3 erradas
      ];
    }

    // // cria um array com posições aleatórias
    // // https://flaviocopes.com/how-to-shuffle-array-javascript/
    // // https://www.delftstack.com/pt/howto/javascript/shuffle-array-javascript/

    const randomConstant = 0.5;
    const shuffledAnswers = answers.sort(() => randomConstant - Math.random());
    // baseado nas main branches dos grupos 1 & 15
    return shuffledAnswers.map((question, index) => {
      if (question === questions[number].correct_answer) {
        console.log(question);
        // alteração dinamica do testId que terá nos botões
        testid = 'correct-answer';
        nameClass = 'correct';
      } else {
        testid = `wrong-answer-${index}`;
        nameClass = 'wrong';
        console.log(index); // posições das respostas errradas
      }
      return (
        // estrutura geral do botao renderizado
        <button
          key={ index }
          type="button"
          data-testid={ testid }
          onClick={ this.isQuestionAnswered }
          changeScore={ this.changeScore }
          disabled={ getTimer === 0 }
          className={ nameClass }
          style={ this.changeStyle(nameClass) }
        >
          {question}
        </button>
      );
    });
  };

  changeStyle = (nameClass) => {
    if (nameClass === 'correct') {
      return { border: '3px solid rgb(6, 240, 15)' };
    }
    return { border: '3px solid rgb(255, 0, 0)' };
  }

  render() {
    const { questions, getTimer } = this.props;
    const { number, isAnswered, gameFinished } = this.state;
    return (
      <div>
        { <Timer />}
        {questions.length && (
          <div>
            <div>
              <span>Category</span>
              <span data-testid="question-category">
                {questions[number].category}
              </span>
            </div>
            <div>
              <span>Question</span>
              <span data-testid="question-text">{questions[number].question}</span>
            </div>
            <div data-testid="answer-options">
              {this.shuffledAnswer()}
            </div>
          </div>
        )}
        {
          isAnswered || (getTimer === 0) === true ? (
            <div>
              <button
                type="button"
                onClick={ this.goToNextQuestion }
                data-testid="btn-next"
              >
                Next
              </button>
            </div>
          ) : null
        }
        {
          gameFinished === true ? (
            <Redirect to="/feedback" />
          ) : null
        }
      </div>
    );
  }
}

// enviar as questões e outros dados
const mapStateToProps = (state) => ({
  questions: state.questions,
  // token: state.token,
  score: state.player.score,
  assertions: state.player.assertions,
  getTimer: state.timer,
});

const mapDispatchToProps = (dispatch) => ({
  changeScore: (assertions, score) => dispatch(getScoreAction(assertions, score)),
});

GameBody.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      correct_answer: PropTypes.string,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string),
      question: PropTypes.string,
    }),
  ).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  getTimer: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBody);
