let express = require('express');
let app = express();


console.log("Hello World");

/*
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Hello Express");
});
*/

//#3
app.get('/', (req, res)=>{
    let absolutePath = __dirname + '/views/index.html'
    console.log(__dirname, absolutePath);
    res.status(200);
    res.sendFile(absolutePath);
});





































 module.exports = app;
