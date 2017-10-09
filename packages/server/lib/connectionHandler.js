/**
 * Created by guillaume on 25/09/2017.
 */

const onMessage = require('./onMessage');
const socketWrapper = require('./socketWrapper');

const connectionHandler = app => webSocket => {

  webSocket.on('message', onMessage(app, socketWrapper(webSocket)));
};

module.exports = connectionHandler;
