var path = require('path');

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the meetups page
    if (req.user) {
      res.redirect("/meetups");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/survey", function (req, res) {
    // If the user already has an account send them to the meetups page
    if (req.user) {
      res.redirect("/meetups");
    }
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/meetups", isAuthenticated, function (req, res) {
  //   console.log("in meetups");
  //   res.sendFile(path.join(__dirname, "../path/meetups.html"));
  // });

  app.get("/meetups", function (req, res) {
    console.log("in meetups");
    res.sendFile(path.join(__dirname, "../public/meetups.html"));
  });

}