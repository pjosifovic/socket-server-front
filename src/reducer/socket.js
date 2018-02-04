import openSocket from 'socket.io-client';


const initialState = { socket: openSocket(API_URL) };
const emptyState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ROOM_SET': {
      const newState = { ...state, room: payload };
      return newState;
    }
    case 'ROOM_REMOVE':
      return emptyState;
    case 'TOKEN_REMOVE':
      return emptyState;
    default:
      return state;
  }
};
