import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      disabled: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      this.validateButton();
    });
  }

  validateButton = () => {
    const { email, name } = this.state;
    const min = 2;
    if (this.validateEmail(email) && name.length >= min) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  validateEmail = (email) => String(email).toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  handleClick = () => {
    const { saveName, history } = this.props;
    const { name } = this.state;

    saveName(name);
    history.push('/jogo');
  }

  render() {
    const { name, email, disabled } = this.state;

    return (
      <div>
        <form>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">
              <input
                type="text"
                data-testid="input-player-name"
                id="name"
                name="name"
                placeholder="Seu nome"
                value={ name }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <input
                type="email"
                data-testid="input-gravatar-email"
                id="email"
                name="email"
                placeholder="Seu Email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <button
            type="submit"
            data-testid="btn-play"
            disabled={ disabled }
            onClick={ this.handleClick }
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveName: (nome) => dispatch(actionUser(nome)),
});

Login.propTypes = {
  saveName: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
