// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'Hello from Sreejith!'});
});

app.get('/api/', (req,res)=> {
  console.log("Jere");
  const date1 = new Date();
  res.json({"unix":date1.valueOf(),"utc":date1.toUTCString()});
})

app.get('/api/:dateInput', (req, res)=>{
  console.log("Here");
  let reg = /^\d+$/;
  let incorrectFormatFlg = reg.test(req.params.dateInput);

  const datefromDate = new Date(req.params.dateInput);
  const dateFromUnixTimestamp = new Date(Number(req.params.dateInput));
  
  console.log(req.params.dateInput,typeof(req.params.dateInput),incorrectFormatFlg, datefromDate, dateFromUnixTimestamp);
  // console.log(typeof(req.params.dateInput), req.params.dateInput, date1);
  // console.log(date1 == 'Invalid Date');
  if(datefromDate != 'Invalid Date'){
    return res.status(200).json({"unix":datefromDate.valueOf(),"utc":datefromDate.toUTCString()});
  }
  else if(incorrectFormatFlg && dateFromUnixTimestamp){
    return res.status(200).json({"unix":req.params.dateInput,"utc":dateFromUnixTimestamp.toUTCString()});
     
  }
  res.json({ error : "Invalid Date" })

})

// listen for requests :)
var listener = app.listen(5000, //process.env.PORT,
 function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
