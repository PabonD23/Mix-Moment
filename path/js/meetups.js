$(document).ready(function() {
  // Getting references to the tilte cityState and eventDate input as well as the table body
  var eventTitle = $("#event-title");
  var city = $("#city");
  var state = $("#state");
  var eventDate = $("#date");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an event
  $(document).on("submit", "#event-form", handleEventFormSubmit);
  $(document).on("click", ".delete-event", handleDeleteButtonPress);

  // Getting the initial list of Events
  getEvents();

  // A function to handle what happens when the form is submitted to create a new event
  function handleEventFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!eventTitle.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    updateEvent({
      eventTitle: eventTitle.val().trim(),
      cityState: cityState.val().trim(),
      eventDate: eventDate.val().trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function updateEvent(eventData) {
    $.post("/api/events", eventData)
      .then(getEvents);
  }

  // Function for creating a new list row for authors
  function createEventRow(eventData) {
    console.log(eventData);
    var newTr = $("<tr>");
    newTr.data("event", eventData);
    
    newTr.append("<td>" + eventData.event_title + "</td>");

    newTr.append("<td>" + eventData.city_state + "</td>");

    newTr.append("<td>" + eventData.event_date + "</td>");
    // newTr.append("<td># of posts will display when we learn joins in the next activity!</td>");
    // newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
    // newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
    // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getEvents() {
    $.get("/api/meetups", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createEventRow(data[i]));
      }
      renderEventList(rowsToAdd);
      eventTitle.val("");
      cityState.val("");
      eventDate.val("");
    });
  }

  // A function for rendering the list of authors to the page
  // function renderAuthorList(rows) {
  //   authorList.children().not(":last").remove();
  //   authorContainer.children(".alert").remove();
  //   if (rows.length) {
  //     console.log(rows);
  //     authorList.prepend(rows);
  //   }
  //   else {
  //     renderEmpty();
  //   }
  // }

  // // Function for handling what to render when there are no authors
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
  //     .then(getAuthors);
  // }
});
