let express = require('express');
let app = express();


console.log("Hello World");

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Hello Express");
});





































 module.exports = app;
