const fs = require('fs');

// var files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function (err, files) {
    if(err){
        console.log("An error has occured. Reason: " + err);
    } else {
        console.log('Files in the directory are: ' + files);
    }
});