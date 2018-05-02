$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var $eventDate= $("#date");
  var $eventTitle = $("#title");
  var $category = $('#category option:selected').val();
  var $city = $("#city");
  var $state = $("#state");
  // Adding event listeners to the form to create a new object, and the button to delete

  //Click event for submit button
  $("#SubmitMeetup").on("click", function(){
      //Add function to add new meetup
      addNewMeetup();
      alert("Meetup added!")

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
      console.log("Meetups", data);
      meetups = data;
      console.log("After meetups eq data", meetups);
      if (!meetups || !meetups.length) {
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
    console.log("Below", meetups);
    $("#meetupsPlaceholder").empty();
    var meetupsToAdd = [];
    for (var i = 0; i < meetups.length; i++) {
      meetupsToAdd.push(createNewRow(meetups[i]));
    }
    console.log("After for loop", meetupsToAdd);
    $("#meetupsPlaceholder").append(meetupsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(meetups) {
    var newDiv = $("<div>");
    newDiv.addClass("meetupList");
    newDiv.addClass("z-depth-2");
    var titleH3 = $("<h3>");
    var dateP = $("<p>");
    var locationP = $("<p>");
    titleH3.text(meetups.title);
    dateP.text(meetups.date)
    locationP.text(meetups.city + ", " + meetups.state);
    newDiv.append(titleH3);
    newDiv.append(dateP);
    newDiv.append(locationP);

    // newDiv.data("meetups", meetups);
    return newDiv;
  
  }

  function displayEmpty() {
    $("#meetupsPlaceholder").empty();
    var messageH2 = $("<h5>");
    messageH2.addClass("meetupList");
    messageH2.html("No meetups currently match your interests. Create a new meetup below or check back soon!");
    $("#meetupsPlaceholder").append(messageH2);
  }
});
