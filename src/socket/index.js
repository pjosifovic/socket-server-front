import openSocket from 'socket.io-client';


export default () => {
  const socket = openSocket(API_URL);
  socket.emit('hello', 'hi');
};
