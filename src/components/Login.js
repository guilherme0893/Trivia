import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userEmailInfos, requestTokenThunk } from '../actions';

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
    const { state: { email, name } } = this;
    const { fetchToken, history, getUserInfos } = this.props;
    // console.log(tokens);
    fetchToken();
    if (value === 'play') {
      history.push('/main');
    } else {
      history.push('/settings');
    }
    getUserInfos({ name, email });
    // saveName(name);
    // saveEmail(email);
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
            type="submit"
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
  tokens: state.token,
  // name: state.user.name,
  // email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  // saveName: (name) => dispatch(actionName(name)),
  // saveEmail: (email) => dispatch(actionEmail(email)),
  getUserInfos: ({ name, email }) => dispatch(userEmailInfos({ name, email })),
  fetchToken: () => dispatch(requestTokenThunk()),
});

Login.propTypes = {
  // saveName: PropTypes.func.isRequired,
  // saveEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  fetchToken: PropTypes.func.isRequired,
  getUserInfos: PropTypes.func.isRequired,
  // tokens: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
