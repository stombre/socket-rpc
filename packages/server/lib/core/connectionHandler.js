/**
 * Created by guillaume on 25/09/2017.
 */

const onClientMessage = require('./onClientMessage');
const socketWrapper = require('./socketWrapper');

const connectionHandler = server => webSocket => {

  webSocket.on('message', onClientMessage(server, socketWrapper(webSocket)));
};

module.exports = connectionHandler;
