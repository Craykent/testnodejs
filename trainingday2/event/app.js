const EventEmitter = require('events');
const emitter = new EventEmitter();
const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLoad', function (arg) {
    console.log('Listener called ',arg)
});

logger.log('Ini test message');



//Raise logging( data message: )
//
// emitter.on('logging', function (arg){
//     console.log('Message: ', arg)
// });
//
// emitter.emit('logging', )