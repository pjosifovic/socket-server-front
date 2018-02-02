import React, { Fragment } from 'react';
import validator from 'validator';

class AuthForm extends React.Component {
  state = {
    username: '',
    usernameDirty: false,
    usernameError: 'Username is required',
  
    password: '',
    passwordDirty: false,
    passwordError: 'Password is required',
  
    email: '',
    emailDirty: false,
    emailError: 'Email is required',
  
    submitted: false,
  };

  emptyState = { ...this.state };


  generateClassName = (formField) => 
    (this.state[`${formField}Dirty`] &&
      this.state[`${formField}Error`] ? 'error' : null);
  

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      [`${name}Dirty`]: true,
      [`${name}Error`]: this.handleValidation(name, value),
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { usernameError, passwordError, emailError } = this.state;
    const inputError = usernameError || emailError || passwordError;

    if (this.props.type === 'login' || !inputError) {
      this.props.onComplete(this.state);
      this.setState(this.emptyState);
    } else {
      this.setState({
        usernameDirty: true,
        emailDirty: true,
        passwordDirty: true,
        submitted: true,
      });
    }
  }

  handleValidation = (name, value) => {
    if (this.props.type === 'login') {
      return null;
    }

    switch (name) {
      case 'username':
        return value.length === 0 ? 'Username is required.' : null;
      case 'email':
        return value.length === 0 ? 'Email is required.' : null;
      case 'password':
        return value.length === 0 ? 'Password is required.' : null;
      default:
        return null;
    }
  }

  generateInput = formField => {
    const type = formField === 'password' ? 'password' : 'text';
    
    return (
      <Fragment>
        <input
          className={this.generateClassName(formField)}
          name={formField}
          placeholder={`${formField}...`}
          type={type}
          value={this.state[formField]}
          onChange={this.handleChange}
        />
        {this.state[`${formField}Dirty`] ? <p>{this.state[`${formField}Error`]}</p> : null}
      </Fragment>
    );
  }

  render() {
    const { type } = this.props;

    const signupRender = type === 'signup' ? this.generateInput('email') : null;

    return (
      <form onSubmit={this.handleSubmit}>
        {this.generateInput('username')}
        {this.generateInput('password')}
        {signupRender}
        <button type="submit">{type}</button>
      </form>
    );
  }
}

export default AuthForm;
