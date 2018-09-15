// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#burgerButton").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newBurger");
  
      var newBurgerPending = {
        burger_name: newBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerPending
      }).then(
        function() {
          console.log("changed burger to", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var burgerDevoured = {
        name: $("#devouredBurger").val().trim(),
        burger_name: $("[name=burger]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: burgerDevoured
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });