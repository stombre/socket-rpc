const ws = require('ws');
const libFactory = require('./lib');

const init = webSocketOptions => {
  const server = new ws.Server(webSocketOptions);

  return libFactory(server);
};

module.exports = init;
