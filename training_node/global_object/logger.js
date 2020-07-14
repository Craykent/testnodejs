var url="http://sguloggingservice.com/log";

function log(message){
    //send an HTTP request
    console.log(message);
}

function log_dummy(message){
    console.log(message);
}

module.exports = log;
