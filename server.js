// server.js

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// useful format function
const format_json = function (data) { 
  return { unix: data.getTime() , utc: data.toUTCString()}
};

// format response 
const response_date_as_json = (response, data) => response.json(format_json(data)); 

app.get('/api/timestamp/:date?', function(request, response) {
  let datestring = request.params.date;
  // empty
  if (datestring == undefined) {
      let date = new Date();
      return response_date_as_json(response, date)
  };
  // unix timestamp
  if (!isNaN(Number(datestring))) {
      let date = new Date(new Number(datestring));
      return response_date_as_json(response, date);
  }
  // try to match ISO-8601
  let date = Date.parse(datestring);
  if (!isNaN(date)) {
      date = new Date(date);
      return response_date_as_json(response, date);
  }
  // else return error
  response.json({error : "Invalid Date"});
});
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
