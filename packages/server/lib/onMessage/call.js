const { REPLY } = require('../messagesType.const');

const operationCall = (app, socket) => async data => {
  const { method, params, callId } = data;

  const callParams = Object.assign({}, { session: socket.session }, params);
  const result = await app.rpc[method](callParams);

  const response = {
    callId,
    result,
  };

  socket.send(REPLY, response);
};

module.exports = operationCall;
