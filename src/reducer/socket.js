import openSocket from 'socket.io-client';

const emptyState = null;

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'SOCKET_SET':
      return openSocket(API_URL);
    case 'SOCKET_REMOVE':
      payload.disconnect();
      return emptyState;
    default:
      return state;
  }
};
