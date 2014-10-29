/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var building = require('./building.model');

exports.register = function(socket) {
  building.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  building.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('building:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('building:remove', doc);
}