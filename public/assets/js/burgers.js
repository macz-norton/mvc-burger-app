$(function() {
  $(".change-devoured").on("click", (event) => {
    const id = $(this).data("id");
    const newDevoured = $(this).data("newDevoured");

    const newDevouredState = {
      devoured: newDevoured
    };

    $.ajax("/api/burgeres/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(() => {
      console.log("Changed devoured to," newDevoured);
      location.reload();
      }
    );
  });

  $(".create-form").on("submit", (event) => {

    event.preventDefault();

    const newBurger = {
      name: $("#burger").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newDevoured
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