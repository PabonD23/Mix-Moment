$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/index", {
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace(data);
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  // Getting a reference to the input field where user adds information
  var $nameInput = $("#nameInput");
  var $locationInput = $("#locationInput");
  var $usernameInput = $("#usernameInput");
  var $passwordInput = $("#passwordInput");
  var $emailInput = $("#emailInput");

  //Reference to interests
  var $outdoor = $("#int-link-1");
  var $fitness = $("#int-link-2");
  var $photography = $("#int-link-3");
  var $dance = $("#int-link-4");
  var $culture = $("#int-link-5");
  var $technology = $("#int-link-6");
  var $gaming = $("#int-link-7");
  var $travel = $("#int-link-8");
  var $food = $("#int-link-9");
  var $books = $("#int-link-10");
  var $fashion = $("#int-link-11");
  var $family = $("#int-link-12");
  var $social = $("#int-link-13");
  var $music = $("#int-link-14");
  var $pets = $("#int-link-15");
  var $career = $("#int-link-16");

  //   Click event for submit button
  $("#submit-survey").on("click", function() {
    addNewUser();
    addNewInterests();
  });

  function addNewUser(event) {
    // event.preventDefault();
    var newUser = {
      name: $nameInput.val().trim(),
      location: $locationInput.val().trim(),
      username: $usernameInput.val().trim(),
      password: $passwordInput.val().trim(),
      email: $emailInput.val().trim()
    };

    $.post("/api/users", newUser);
  }

  function addNewInterests(event) {
    var newInterest = {
      username: $usernameInput.val().trim(),
      outdoor: $outdoor.is(":checked"),
      fitness: $fitness.is(":checked"),
      photography: $photography.is(":checked"),
      dance: $dance.is(":checked"),
      culture: $culture.is(":checked"),
      technology: $technology.is(":checked"),
      gaming: $gaming.is(":checked"),
      travel: $travel.is(":checked"),
      food: $food.is(":checked"),
      books: $books.is(":checked"),
      fashion: $fashion.is(":checked"),
      family: $family.is(":checked"),
      social: $social.is(":checked"),
      music: $music.is(":checked"),
      pets: $pets.is(":checked"),
      career: $career.is(":checked")
    };

    $.post("/api/interests", newInterest);
  }
});
