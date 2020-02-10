import socketIO from 'socket.io-client';

import defaultEndpoint from '../config/endpoint';

const sockets = {};

const provideSocket = (endpoint = defaultEndpoint) => {
  if (!sockets[endpoint]) sockets[endpoint] = socketIO(endpoint);
  return sockets[endpoint];
};

export default provideSocket;