const assert = require('assert');
const call = require('./call');
const { CALL } = require('../messagesType.const');

const OPERATIONS = (app, socket) => ({
  [CALL]: call(app, socket),
});

const onClientMessage = (app, socket) => data => {
  assert.ok(data.type, 'The message is not compatible with the framework format: Missing type field.');

  if(!OPERATIONS(socket, app)[data.type]) {
    throw new Error('The message is not compatible with the framework format: Undefined operation.');
  }

  OPERATIONS(socket, app)[data.type](data);
};

module.exports = onClientMessage;
