import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import store from '../store/index';
import { actionUser, requestApiThunk } from '../actions';

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

  handleClick = ({ target: { value } }) => {
    const { fetchApi, history } = this.props;

    if (value === 'play') {
      history.push('/main');
      fetchApi();
    } else {
      history.push('/settings');
    }
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
            value="play"
            onClick={ this.handleClick }
          >
            Play
          </button>
          <button
            type="button"
            data-testid="btn-settings"
            value="settings"
            onClick={ this.handleClick }
          >
            Settings
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  saveName: (nome) => dispatch(actionUser(nome)),
  fetchApi: () => dispatch(requestApiThunk()),
});

Login.propTypes = {
  // saveName: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  fetchApi: PropTypes.func.isRequired,
  // tokenProps: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
