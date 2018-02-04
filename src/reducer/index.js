import { combineReducers } from 'redux';

import auth from './auth';
import socket from './socket';
import room from './room';

export default combineReducers({
  token: auth,
  socket,
  room,
});
