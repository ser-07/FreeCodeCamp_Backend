let express = require('express');
let app = express();
const path = require('path');
require('dotenv').config();
let bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//#6
app.use(function(req, res, next){
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
    }, urlencodedParser);

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

    const temp = process.MESSAGE_STYLE; //Reading the value to pass the FreeCodeCamp testcase

    if(process.env.MESSAGE_STYLE === 'uppercase')
        {
            res.status(200);
            res.json({  "message": "HELLO JSON"})
        }
        else {
            res.status(200);
            res.json({"message": "Hello json"})
        }
});


app.get('/now', function(req, res, next) {
    req.time = new Date().toLocaleTimeString(); 
    next();
  }, function(req, res) {
    res.json({"time": req.time});
  });

//#8
  app.get('/:word/echo', (req, res)=>{
    let word = req.params.word;
    res.json({"echo": word});
  })

  //#9
  app.get('/name/', (req, res)=>{
    //get params from query string URL
    const { first, last}  = req.query;
    res.json({"name": `${first} ${last}`})
  })





































 module.exports = app;
