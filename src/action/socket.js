import superagent from 'superagent';

export const setSocketAction = () => ({
  type: 'SOCKET_SET',
});

export const removeSocketAction = socket => ({
  type: 'SOCKET_REMOVE',
  payload: socket,
});

// export const createRoomAction = (room) => (store) => {
//   const clientSocket = store.getState().client.socket;
//   clientSocket.emit('createRoom', room);
//   return store.dispatch(setRoomAction(room));
// };
  // superagent.post(`${API_URL}/create`)
  //   .send(room)
  //   .then(console.log)
  //   .catch(console.log);

// export const joinRoomAction = (user) => (store) => // TODO: make do stuff
//   superagent.get(`${API_URL}/login`)
//     .catch(console.log);
