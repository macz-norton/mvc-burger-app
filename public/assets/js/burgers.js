$(function() {
  $(".devoured").on("click", (event) => {
    event.preventDefault();
    
    const id = $(this).data("id");

    const newDevouredState = {
      devoured: 1
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

  $(".create-form").on("click", (event) => {

    event.preventDefault();
    event.stopImmediatePropagation();

    const newBurger = {
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

// Animated letters
const textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000
  });