import openSocket from 'socket.io-client';

export default () => {
  const socket = openSocket(API_URL);

  socket.on('room conflict', data => {
    console.log(data); 
    // TODO: HANDLE ROOM CONFLICT, modal popup warning
  });

  socket.on('room created', data => {
    console.log(data); 
    // TODO: HANDLE ROOM CREATION, take to room dashboard
    // TODO: SET STATE of ROOM to owner: true
  });

  socket.on('room joined', data => {
    console.log(data); 
    // TODO: HANDLE ROOM JOINED, take to room dashboard
    // TODO: SET STATE of ROOM to owner: false
  });

  socket.on('room not found', data => {
    console.log(data); 
    // TODO: HANDLE ROOM NOT FOUND, modal popup warning
  });

  socket.on('room closed', data => {
    console.log(data); 
    // TODO: HANDLE ROOM NOT FOUND, modal popup warning
  });

  return socket;
};
