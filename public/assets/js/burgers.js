$(function() {
  $(".devoured").on("click", (event) => {
    event.preventDefault();
    
    let id = $(event.target).attr("data-id");
    console.log("Public JS id: " + id)
    let isDevoured = $(event.target).attr("data-devoured");

    let newDevouredState = {
      devoured: isDevoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(() => {
      console.log("Changed to devoured");
      location.reload();
      }
    );
  });

  $(".submit").on("click", (event) => {

    event.preventDefault();
    event.stopImmediatePropagation();

    let newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      console.log("Created a new burger");
      location.reload();
      }
    );
  });
});
