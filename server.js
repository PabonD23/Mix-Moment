var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express();
var session = require("express-session");
var passport = require("./config/passport");

var PORT = process.env.PORT || 8080;
var db = require("./models");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require('./controllers/api-routes.js')(app); 
require('./controllers/html-routes.js')(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});