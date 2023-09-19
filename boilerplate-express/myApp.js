let express = require('express');
let app = express();


console.log("Hello World");

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});



































 module.exports = app;
