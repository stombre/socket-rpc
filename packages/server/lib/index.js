const connectionHandler = require('./connectionHandler');
const apiFactory = require('./api');

const libFactory = socketServer => {

  const app = {
    socket: socketServer,
  };

  socketServer.on('connection', connectionHandler(app));

  return apiFactory(app);
};

module.exports = libFactory;
