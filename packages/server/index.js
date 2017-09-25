/**
 * Created by guillaume on 25/09/2017.
 */

const ws = require('ws');
const libFactory = require('./lib');

const init = webSocketOptions => {
  const WebSocket = require('ws');

  const server = new WebSocket.Server(webSocketOptions);

  return libFactory(server);
};

module.exports = init;