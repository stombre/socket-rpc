/**
 * Created by guillaume on 25/09/2017.
 */

const { REPLY } = require('../constants/messagesType.const');

const operationCall = (app, socket) => async data => {
  const { method, params, callId } = data;

  const result = await app[method](params);

  const response = {
    callId,
    result,
  };
  socket.send(REPLY, response);
};

module.exports = operationCall;
