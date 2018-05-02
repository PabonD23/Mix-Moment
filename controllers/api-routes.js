var path = require("path");
var db = require("../models");
var passport = require("../config/passport");

// module.exports = function(app){

//     app.get('/api/survey', function(req, res){
//         res.json(friends);
//     });

//     app.post('/api/survey', function(req, res){

//         console.log(req.body.name);
//         console.log(req.body.scores.length);

//         var match = {};

//         var differenceToBeat = 100;

//         for (var i = 0; i < friends.length; i++) {

//             var differenceArray = [];
//             var totalDifference = 0;

//             for (var j = 0; j < friends[i].scores.length; j++) {

//                 differenceArray.push( Math.abs( req.body.scores[j] - friends[i].scores[j] ) );

//             };

//             console.log(differenceArray)

//             for (var k = 0; k < differenceArray.length; k++) {
//                 totalDifference += differenceArray[k];
//             }

//             console.log(totalDifference)

//             if (match == {}) {
//                 match = friends[i];
//                 differenceToBeat = totalDifference;
//             } else if ( totalDifference < differenceToBeat ) {
//                 match = friends[i];
//                 differenceToBeat = totalDifference;
//             }

//             console.log(differenceToBeat)

//         }

//         console.log('Your match is: ' + match.name)

//         friends.push(req.body)
//         res.json(match)

//     });

// };

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/meetups");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      location: req.body.location
    }).then(function(newUser) {
        db.Interest.create({
          outdoor: req.body.outdoor,
          fitness: req.body.fitness,
          photography: req.body.photography,
          dance: req.body.dance,
          culture: req.body.culture,
          technology: req.body.technology,
          gaming: req.body.gaming,
          travel: req.body.travel,
          food: req.body.food,
          books: req.body.books,
          fashion: req.body.fashion,
          family: req.body.family,
          social: req.body.social,
          music: req.body.music,
          pets: req.body.pets,
          career: req.body.career,
          UserId: newUser.id
        }).then(function() {
            res.json( newUser );
          })
          .catch(function(err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
          }).catch(function (err) {
            res.json(err);
          });

        // res.redirect(307, "/api/meetings");
      })
  });

  app.post("/api/meetups", function(req, res) {
    console.log(req.body);
    db.Meetup.create({
      date: req.body.date,
      title: req.body.title,
      category: req.body.category,
      city: req.body.city,
      state: req.body.state
    })
      .then(function() {
        // res.redirect(307, "/api/meetups);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  app.get("/api/meetups", function(req, res) {
    db.Meetup.findAll({})
      .then(function(meetupsDB) {
        res.json(meetupsDB);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
