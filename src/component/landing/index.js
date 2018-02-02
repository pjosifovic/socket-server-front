import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthForm from '../auth-form';
import { signupAction } from '../../action/auth';

class Landing extends Component {
  state = {};

  render() {
    return (
      <AuthForm type="signup" onComplete={this.props.signup} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (userData) => dispatch(signupAction(userData)),
});

export default connect(null, mapDispatchToProps)(Landing);
