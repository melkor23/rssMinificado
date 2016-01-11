/**
 * Broadcast updates to client when the model changes
 */

'use strict';

//var GetImageEvents = require('./getImage.events');

// Model events to emit
var events = ['save', 'remove'];

exports.register = function(socket) {
  // Bind model events to socket events
  for (var i = 0, eventsLength = events.length; i < eventsLength; i++) {
    var event = events[i];
  /*  var listener = createListener('getImage:' + event, socket);

    GetImageEvents.on(event, listener);
    socket.on('disconnect', removeListener(event, listener));
    */
  }
};


function createListener(event, socket) {
  /*return function(doc) {
    socket.emit(event, doc);
  };*/
}

function removeListener(event, listener) {
  /*return function() {
    GetImageEvents.removeListener(event, listener);
  };*/
}


