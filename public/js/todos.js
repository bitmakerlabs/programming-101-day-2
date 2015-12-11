$(document).on('ready', function() {

  // Handle events for filter clicks
  $('.todo-filter').on('click', function() {
    $('.todo-filter').removeClass('is-active');
  });

  $('.todo-filter.all').on('click', function() {
    $('.todo').show();
    $(this).addClass('is-active');
  });

  $('.todo-filter.remaining').on('click', function() {
    $('.todo').show();
    $('.todo.is-complete').hide();
    $(this).addClass('is-active');    
  });

  $('.todo-filter.completed').on('click', function() {
    $('.todo').hide();
    $('.todo.is-complete').show();
    $(this).addClass('is-active');    
  });

});
