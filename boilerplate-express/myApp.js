let express = require('express');
let app = express();
const path = require('path');
require('dotenv').config();


console.log("Hello World");

/*
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Hello Express");
});
*/

//#4
// console.log(path.join(__dirname, 'public/style.css'));
// let absolutePath = __dirname + '/public';
// console.log(absolutePath);
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/public',express.static(__dirname + '/public'));
// app.use(express.static(absolutePath));


//#3
app.get('/', (req, res)=>{
    let absolutePath = __dirname + '/views/index.html'
    console.log(__dirname, absolutePath);
    res.status(200);
    res.sendFile(absolutePath);
});

// #5
app.get('/json' , (req, res ) => {
    const str1 = "Hello json";
    console.log(process.env)
    let msgs = process.env.MESSAGE_STYLE === 'uppercase' ? str1.toUpperCase() : str1;
    console.log(msgs);
    res.status(200);
    res.json({"message": msgs});
});





































 module.exports = app;
