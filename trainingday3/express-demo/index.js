const express = require('express');
const app = express();
app.use(express.json());
const courses =[
    {id:1, name:'course1'},{id:2, name:'course2'},{id:3, name:'course3'}
];

app.get("/", (req, res) =>{
    res.send('Hello World dengan nodemon');
});

app.get("/api/courses", (req, res) =>{
    res.send(courses)
});

app.get("/api/courses/:id/:name", (req, res)=>{
    res.send(req.params.id+ " " +req.params.name);
});

app.get("/api/courses/:id", (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id) );
    if(!course) res.status(404).send('The course with the given ID was not found.');

    res.send(course);
    res.send(req.query);
    // var parameter_sort = req.query.sortBy;
    // res.send(parameter_sort);
});

// PORT
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

app.post("/api/courses/", (req,res) =>{
    const course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
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
