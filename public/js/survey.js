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
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, log the error
      }).catch(function(err) {
        console.log(err);
      });
    }
  
  });

  //Controls to add red borders to selected photos
$("#int-link-1").on("click", function(){
  $("#int-image1").attr("class", "img-active");
});

$("#int-link-2").on("click", function(){
  $("#int-image2").attr("class", "img-active");
});

$("#int-link-3").on("click", function(){
  $("#int-image3").attr("class", "img-active");
});

$("#int-link-4").on("click", function(){
  $("#int-image4").attr("class", "img-active");
});

$("#int-link-5").on("click", function(){
  $("#int-image5").attr("class", "img-active");
});

$("#int-link-6").on("click", function(){
  $("#int-image6").attr("class", "img-active");
});

$("#int-link-7").on("click", function(){
  $("#int-image7").attr("class", "img-active");
});

$("#int-link-8").on("click", function(){
  $("#int-image8").attr("class", "img-active");
});

$("#int-link-9").on("click", function(){
  $("#int-image9").attr("class", "img-active");
});

$("#int-link-10").on("click", function(){
  $("#int-image10").attr("class", "img-active");
});

$("#int-link-11").on("click", function(){
  $("#int-image11").attr("class", "img-active");
});

$("#int-link-12").on("click", function(){
  $("#int-image12").attr("class", "img-active");
});

$("#int-link-13").on("click", function(){
  $("#int-image13").attr("class", "img-active");
});

$("#int-link-14").on("click", function(){
  $("#int-image14").attr("class", "img-active");
});

$("#int-link-15").on("click", function(){
  $("#int-image15").attr("class", "img-active");
});

$("#int-link-16").on("click", function(){
  $("#int-image16").attr("class", "img-active");
});

$(document).ready(function() {
// Getting a reference to the input field where user adds information
var $nameInput = $("#nameInput");
var $locationInput = $("#locationInput");
var $usernameInput = $("#usernameInput");
var $passwordInput = $("#passwordInput");
var $emailInput = $("#emailInput");
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
  $("#submit-survey").on("click", function(){
    addNewUser();

  })

  function addNewUser (event) {
      // event.preventDefault();
      var newUser = {
          name: $nameInput.val().trim(),
          location: $locationInput.val().trim(),
          username: $usernameInput.val().trim(),
          password: $passwordInput.val().trim(),
          email: $emailInput.val().trim()
      };

      $.post("/api/users", newUser);
      };

  function addInterests (event) {
    var userInterests = {
      username: $usernameInput.val().trim(),
      

    }
  }
});