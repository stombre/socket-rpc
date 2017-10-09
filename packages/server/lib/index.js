/**
 * Created by guillaume on 25/09/2017.
 */

const connectionHandler = require('./core/connectionHandler');
const apiFactory = require('./api');

const libFactory = socketServer => {

  const app = {
    socket: socketServer,
  };

  socketServer.on('connection', connectionHandler(app));

  return apiFactory(app);
};

module.exports = libFactory;
