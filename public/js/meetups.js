$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var $eventDate= $("#date");
  var $eventTitle = $("#title");
  var $category = $("category")
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
      category: $category.val(),
      city: $city.val().trim(),
      state: $state.val().trim()
    };

    $.post("/api/meetups", newMeetup);
  }

    // Calling the saveMeetup function and passing in the value of the  nputs
  //   saveMeetup({
  //     eventDate: eventDate.val().trim(),
  //     eventTitle: eventTitle.val().trim(),
  //     city: city.val().trim(),
  //     state: state.val().trim()
  //   });
  // }

  // // A function for creating a meetup. Calls meetUps upon completion
  // function saveMeetup(meetupData) {
  //   $.post("/api/meetups", meetupData)
  //     .then(getmeetups);
  // }

  // // Function for creating a new list row for meetups
  // function createMeetupRow(meetupData) {
  //   console.log(meetupData);
  //   var newTr = $("<tr>");
  //   newTr.data("meetup", meetupData);
  //   newTr.append("<td>" + meetupData.event_title + "</td>");
  //   newTr.append("<td>" + meetupData.event_date + "</td>");
  //   newTr.append("<td>" + meetupData.city + "</td>");
  //   newTr.append("<td>" + meetupData.state + "</td>");

  //   // newTr.append("<ts will display when we learn joins in the next activity!</td>");
  //   // newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
  //   // newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
  //   // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");d># of post
  //   return newTr;
  // }

  // // Function for retrieving meetups and getting them ready to be rendered to the page
  // function getMeetups() {
  //   $.get("/api/meetups", function(data) {
  //     var rowsToAdd = [];
  //     for (var i = 0; i < data.length; i++) {
  //       rowsToAdd.push(createMeetupRow(data[i]));
  //     }
  //     renderMeetupList(rowsToAdd);
  //     nameInput.val("");
  //   });
  // }

  // A function for rendering the list of meetups to the page
  // function renderMeetupList(rows) {
  //   meetupList.children().not(":last").remove();
  //   authorContainer.children(".alert").remove();
  //   if (rows.length) {
  //     console.log(rows);
  //     authorList.prepend(rows);
  //   }
  //   else {
  //     renderEmpty();
  //   }
  // }

  // Function for handling what to render when there are no authors
  // function renderEmpty() {
  //   var alertDiv = $("<div>");
  //   alertDiv.addClass("alert alert-danger");
  //   alertDiv.text("You must create an Author before you can create a Post.");
  //   authorContainer.append(alertDiv);
  // }

  // // Function for handling what happens when the delete button is pressed
  // function handleDeleteButtonPress() {
  //   var listItemData = $(this).parent("td").parent("tr").data("author");
  //   var id = listItemData.id;
  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/authors/" + id
  //   })
  //     .then(getMeetups);
  // }
});
