/**
 * Created by guillaume on 25/09/2017.
 */

const { REPLY } = require('../constants/messagesType');

const operationCall = async (server, socket) => data => {

  socket.send(REPLY, data);
};

module.exports = operationCall;
