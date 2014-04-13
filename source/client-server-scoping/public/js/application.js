$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('#awesomeness_holder').html($(this).attr('data-heading')); //no innerHTML??  jquery vs. js
    //this refers to object that called fcn
  });

  $('.skill_teller').on('click', function() {
    console.log("skillz")
    $('#skill_holder').html($(this).attr('data-heading'));
  });

  $('.meal_teller').on('click', function() {
    console.log("mealz")
    $('#meal_holder').html($(this).attr('data-heading'));
  });

  // What other events do you need to bind to make the other pages work?
});
