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
// Getting a reference to the input field where user adds a new todo
var $nameInput = $("#nameInput");
var $locationInput = $("#locationInput");
var $usernameInput = $("#usernameInput");
var $passwordInput = $("#passwordInput");
var $emailInput = $("#emailInput");
    //Click event for submit button
    $("#submit-survey").on("click", function(){

    })

    function addNewUser (event) {
        event.preventDefault();
        var newUser = {
            member_name: $nameInput.val().trim(),
            city_state: $locationInput.val().trim(),
            username: $usernameInput.val().trim(),
            password: $passwordInput.val().trim(),
            email: $emailInput.val().trim()
        };

        $.post("/api/members", members);
        };
});