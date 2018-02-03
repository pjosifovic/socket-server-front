import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import socketTest from '../../socket';
import AuthForm from '../auth-form';
import { signupAction } from '../../action/auth';

class Landing extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <AuthForm type="signup" onComplete={socketTest} />
        <AuthForm type="login" onComplete={this.props.signup} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (userData) => dispatch(signupAction(userData)),
});

export default connect(null, mapDispatchToProps)(Landing);
