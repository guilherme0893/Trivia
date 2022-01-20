import React, { Component } from 'react';

class BackToLoginButton extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="btn-play-again"
        >
          Voltar ao login
        </button>
      </div>
    );
  }
}

export default BackToLoginButton;
