var url = "http://mylogger.io/log";

function displayLog(message){
    //console.log("Log message: " + message);
    console.log(`Log message: ${message}`);
}

function displayURL(){
    console.log(`URL message: ${url}`);
}

// displayLog("ini trial pertama menggunakan logger.js node app")
module.exports.tampilkanLog = displayLog;
module.exports.tampilkanURL = displayURL;
