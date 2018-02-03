import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import AuthForm from '../auth-form';
import SocketForm from '../socket-form';
import { signupAction, loginAction, logoutAction } from '../../action/auth';
import { createRoomAction, joinRoomAction } from '../../action/socket';

class Landing extends Component {
  state = {}; // only here to appease the linter

  render() {
    return (
      <Fragment>
        <h2>Signup</h2>
        <AuthForm type="signup" onComplete={this.props.signup} />
        <h2>Login</h2>
        <AuthForm type="login" onComplete={this.props.login} />
        <div>
          <h2>Logout</h2>
          <button onClick={this.props.logout}>Logout</button>
        </div>
        <h3>Create</h3>
        <SocketForm type="create" onComplete={this.props.create} />
        <h3>Join</h3>
        <SocketForm type="join" onComplete={this.props.join} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: userData => dispatch(signupAction(userData)),
  login: userData => dispatch(loginAction(userData)),
  logout: () => dispatch(logoutAction()),
  join: roomName => dispatch(joinRoomAction(roomName)),
  create: roomName => dispatch(createRoomAction(roomName)),
});

export default connect(null, mapDispatchToProps)(Landing);
