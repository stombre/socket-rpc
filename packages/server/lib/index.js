/**
 * Created by guillaume on 25/09/2017.
 */

const connectionHandler = require('./core/connectionHandler');

const libFactory = socketServer => {

  const server = {
    socket: socketServer,
  };

  socketServer.on('connection', connectionHandler(server));

};

module.exports = libFactory;
