import superagent from 'superagent';

const setRoomAction = room => ({
  type: 'ROOM_SET',
  payload: room,
});

const removeRoomAction = () => ({
  type: 'ROOM_REMOVE',
});

export const createRoomAction = (room) => (store) => {
  const { socket } = store.getState();

  socket.emit('create room', room);
  return store.dispatch(setRoomAction(room));
  // TODO: NEED TO SET ROOM STATE AFTER
  // SERVER CONFIRMS THE NAME IS AVAILABLE
};

export const joinRoomAction = (room) => (store) => {
  const { socket } = store.getState();

  socket.emit('join room', room);
  return store.dispatch(setRoomAction(room));
  // TODO: NEED TO SET ROOM STATE AFTER
  // SERVER CONFIRMS THE NAME IS AVAILABLE
};
