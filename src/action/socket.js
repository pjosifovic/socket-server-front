import superagent from 'superagent';

const setRoomAction = room => ({
  type: 'ROOM_SET',
  payload: room,
});

const removeRoomAction = () => ({
  type: 'ROOM_REMOVE',
});

export const createRoomAction = (room) => (store) =>
  store.dispatch(setRoomAction(room));
  // superagent.post(`${API_URL}/create`)
  //   .send(room)
  //   .then(console.log)
  //   .catch(console.log);

export const joinRoomAction = (user) => (store) => // TODO: make do stuff
  superagent.get(`${API_URL}/login`)
    .catch(console.log);
