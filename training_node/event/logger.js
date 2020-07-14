const EventEmitter = require('events');
var url="http://sguloggingservice.com/log";

class Logger extends EventEmitter{
    log(message){
        //send an HTTP request
        console.log(message);

        this.emit('messageLogged', {id: 1, url:'http://heberthendrik.com'});
    }
}
module.exports = Logger;
