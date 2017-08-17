var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

let apiRoutes = require('./app/routing/apiRoutes.js');
let htmlRoutes = require('./app/routing/htmlRoutes.js')

var app = express();
var PORT = process.env.PORT || 8080;
 
// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routing
apiRoutes(app);
htmlRoutes(app);

// Serve Listener
app.listen(PORT, function() {
  console.log("App is listening on PORT: " + PORT)
});