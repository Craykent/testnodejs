const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    res.send('Hello World dengan nodemon');
});

app.get("/api/courses", (req, res) =>{
    res.send([1,2,3,4, "ini lima"])
});

app.get("/api/courses/:id/:name", (req, res)=>{
    res.send(req.params.id+ " " +req.params.name);
})
// PORT
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});


/*const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.write('Hello World');
        res.end();
    }

    else if(req.url ==="/api/courses"){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
    else {
        res.write("Page not available");
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000...');*/
