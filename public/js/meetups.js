$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var $eventDate= $("#date");
  var $eventTitle = $("#title");
  var $category = $("category").find( "option:selected" ).prop("value");
  var $city = $("#city");
  var $state = $("#state");
  // Adding event listeners to the form to create a new object, and the button to delete

  //Click event for submit button
  $("#SubmitMeetup").on("click", function(){
      //Add function to add new meetup
      addNewMeetup();

  })


  // A function to handle what happens when the form is submitted to create a new Meetup
  function addNewMeetup(event) {
    
    var newMeetup = {
      date: $eventDate.val(),
      title: $eventTitle.val().trim(),
      category: $category,
      city: $city.val().trim(),
      state: $state.val().trim()
    };

    $.post("/api/meetups", newMeetup);
  }

  function getMeetups(category) {
    $.get("/api/meetups", function(data) {
      console.log("Posts", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }

  getMeetups();
  // InitializeRows handles appending all of our constructed post HTML inside
  // blogContainer
  function initializeRows() {
    $("#meetupsPlaceholder").empty();
    var meetupsToAdd = [];
    for (var i = 0; i < meetups.length; i++) {
      meetupsToAdd.push(createNewRow(meetups[i]));
    }
    $("#meetupsPlaceholder").append(meetupsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    var newMeetupCard = $("<div>");
    newMeetupCard.addClass("row");
    var newMeetupCardHeading = $("<div>");
    newMeetupCardHeading.addClass("card-header");
    var newMeetupTitle = $("<h2>")
    var newMeetupDate = $("<h3>");
    var newMeetupCategory = $("<h3>");
    var newMeetupLocation = $("<h3>");
    
    newMeetupTitle.text(meetup.title);
    newMeetupDate.text(meetup.date);
    newMeetupCategory.text(meetup.category);
    newMeetupLocation.text(meetup.city + meetup.state);

    newMeetupCardHeading.append(newMeetupTitle);
    newMeetupCardHeading.append(newMeetupCategory);
    newMeetupCardHeading.append(newMeetupDate);
    newMeetupCardHeading.append(newMeetupLocation);

    newMeetupCard.data("post", post);
    return newMeetupCard;
  }

  function displayEmpty() {
    $("#meetupsPlaceholder").empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No meetups currently match your interests. Create a new meetup below or check back soon!");
    $("#meetupsPlaceholder").append(messageH2);
  }
});
