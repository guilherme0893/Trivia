import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GameBody extends Component {
  // constructor() {
  //   super();

  //   // this.state = {
  //   //   number: 0,
  //   // };
  // }

  shuffledAnswer = () => {
    const { questions } = this.props;
    // devido aos problemas de percorrer o array, com o number nao quebra a aplicação
    // const { number } = this.state;
    console.log(questions);
    console.log(typeof questions);
    console.log(questions[0]);
    console.log(questions[3]);

    let testid;
    let answers = [];
    console.log(questions.length);
    if (questions.length > 0) {
      answers = [
        questions[0].correct_answer,
        ...questions[0].incorrect_answers, // spread porque pode haver ate 3 erradas
      ];
    }
    // // cria um array com posições aleatórias
    // // https://flaviocopes.com/how-to-shuffle-array-javascript/
    // // https://www.delftstack.com/pt/howto/javascript/shuffle-array-javascript/

    const randomConstant = 0.5;
    const shuffledAnswers = answers.sort(() => randomConstant - Math.random());

    // baseado nas main branches dos grupos 1 & 15
    return shuffledAnswers.map((question, index) => {
      if (question === questions[0].correct_answer) {
        console.log(question[index]);
        // alteração dinamica do testId que terá nos botões
        testid = 'correct-answer';
      } else {
        testid = `wrong-answer-${index}`;
        console.log(index); // posições das respostas errradas
      }
      return (
        // estrutura geral do botao renderizado
        <button
          key={ index }
          type="button"
          data-testid={ testid }
        >
          {question}
        </button>
      );
    });
  };

  render() {
    const { questions } = this.props;
    // const { number } = this.state;
    return (
      <div>
        {questions.length && (
          <div>
            <div>
              <span>Category</span>
              <span data-testid="question-category">
                {questions[0].category}
              </span>
            </div>
            <div>
              <span>Question</span>
              <span data-testid="question-text">{questions[0].question}</span>
            </div>
            <div data-testid="answer-options">
              {this.shuffledAnswer()}
            </div>
          </div>
        )}
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

GameBody.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      correct_answer: PropTypes.string,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string),
      question: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(GameBody);
