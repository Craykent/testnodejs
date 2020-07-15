const http = require('http');
const server = http.createServer((req, res) =>{
        if(req.url === "/"){
            res.write('Hello World');
            res.end();
        }

        else if(req.url ==="/sgu/training"){
            res.write('Ini adalah route kedua dari incoming HTTP request');
            res.end();
        }
        else {
            res.write("Page not available");
            res.end();
        }
});
/*

CONTOH PENGGUNAAN HTTP MODULE UNTUK INCOMING HTTP REQUEST

*/

/*server.listen(3000, (socket) =>{
    //perintah yang mau dijalankan kalau ada incoming connection
    //atau ada HTTP request ke server kita
    console.log('New HTTP request coming...')
});*/
console.log('Listening on port 3000...');
