/**
 * Created by guillaume on 25/09/2017.
 */

const assert = require('assert');
const call = require('./operationCall');
const { CALL } = require('../constants/messagesType');

const OPERATIONS = (server, socket) => ({
  [CALL]: call(server, socket),
});

const onClientMessage = (server, socket) => data => {
  assert.ok(data.type, 'The message is not compatible with the framework format: Missing type field.');

  if(!OPERATIONS(socket, server)[data.type]) {
    throw new Error('The message is not compatible with the framework format: Undefined operation.');
  }

  OPERATIONS(socket, server)[data.type](data);
};

module.exports = onClientMessage;
