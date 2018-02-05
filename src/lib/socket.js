import openSocket from 'socket.io-client';
import { setRoomAction } from '../action/room';

export default dispatch => { // TODO: Rob - takes in dispatch to allow state changing
  const socket = openSocket(API_URL);

  socket.on('room conflict', room => {
    console.log(room); 
    // TODO: HANDLE ROOM CONFLICT, modal popup warning
  });

  socket.on('room created', room => {
    dispatch(setRoomAction(room));
  });

  socket.on('room joined', room => {
    console.log(room); 
    // TODO: HANDLE ROOM JOINED, take to room dashboard
    // TODO: SET STATE of ROOM to owner: false
  });

  socket.on('room not found', room => {
    console.log(room); 
    // TODO: HANDLE ROOM NOT FOUND, modal popup warning
  });

  socket.on('room closed', room => {
    console.log(room); 
    // TODO: HANDLE ROOM NOT FOUND, modal popup warning
  });

  return socket;
};

export const createRoomEmit = (socket, room) => {
  socket.emit('create room', room);
};
