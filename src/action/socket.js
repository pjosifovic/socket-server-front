import superagent from 'superagent';

export const setSocketAction = () => ({
  type: 'SOCKET_SET',
});

export const removeSocketAction = socket => ({
  type: 'SOCKET_REMOVE',
  payload: socket,
  // TODO: MAKE ASY+NC VERSION THAT checks for any rooms
  // owned by this person and calls the leave method
});
