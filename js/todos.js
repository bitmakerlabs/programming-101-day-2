// Write a function that updates the counter based on which todos are completed

function updateCounter() {
  var allTodos = document.querySelectorAll(".todo");
  
  // Enter the correct class to select all completed todos. 
  var completedTodos = document.querySelectorAll(".todo.is-complete");
  
  // Calculate how many todos are left.
  // Hint: Calculate the total number of todos MINUS the number completed.
  var remainingTodosCount = allTodos.length - completedTodos.length;
  
  document.getElementById("counter").innerHTML = remainingTodosCount;

  // Make the spaceship appear when remainingTodosCount is zero.
  // Make it disappear again when remainingTodosCount is greater than zero.
  // WRITE CODE HERE

}

// Run the function you just wrote to update the counter
updateCounter()

// Add an event listener to each of the todos which will toggle the 'is-complete' css class when clicked
var allTodoLinks = document.querySelectorAll(".todo a");
for (var i=0; i < allTodoLinks.length; i++) {
  var theLink = allTodoLinks[i];
  theLink.addEventListener("click", function(){
    this.parentNode.classList.toggle('is-complete');
    updateCounter();
  }) 
}

// Write a function that will un-highlight all the filter buttons
function deactivateAllFilters() {
  var filters = document.querySelectorAll(".todo-filter");
  for (var i=0; i < filters.length; i++) {
    // WRITE CODE HERE
  }
}

// Write a function that will un-hide all the todos
function showAllTodos() {
  var todos = document.querySelectorAll(".todo");
  // WRITE CODE HERE
}

// Write a function that will hide all the todos
function hideAllTodos() {
  // WRITE CODE HERE
}

// Add an event listener to the 'all' filter button that will show all todos when clicked
document.getElementById("show-all").addEventListener("click", function() {
  deactivateAllFilters();
  showAllTodos();
  this.classList.add('is-active');
});

// Add an event listener to the 'remaining' filter button that will show remaining todos when clicked
document.getElementById("show-remaining").addEventListener("click", function() {
    deactivateAllFilters();
    showAllTodos();
    // WRITE CODE HERE
    this.classList.add('is-active');
});

// Add an event listener to the 'completed' filter button that will show completed todos when clicked
document.getElementById("show-completed").addEventListener("click", function() {
  // WRITE CODE HERE
});
