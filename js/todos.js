// Write a function that updates the counter based on which todos are completed

function updateCounter() {
  var allTodos = document.querySelectorAll(".todo");
  
  // Enter the correct class to select all completed todos. 
  var completedTodos = document.querySelectorAll("CHANGE ME");
  
  // Calculate how many todos are left.
  // Hint: Calculate the number completed minus the total number.
  var remainingTodosCount = "CHANGE ME";
  
  document.getElementById("counter").innerHTML = remainingTodosCount;

  if (remainingTodosCount == 0) {
    document.querySelector('.todo-empty').style.display = 'block';
  } else {
    document.querySelector('.todo-empty').style.display = 'none';
  }
}

// Run the function you just wrote to update the counter
// WRITE CODE HERE

// Add an event listener to each of the todos which will toggle the 'is-complete' css class when clicked
var items = document.querySelectorAll(".todo a");
for (var i=0; i < items.length; i++) {
  //WRITE CODE HERE  
}

// Write a function that will un-highlight all the filter buttons
function deactivateAllFilters() {
  var filters = document.querySelectorAll(".todo-filter");
  for (var i=0; i < filters.length; i++) {
    //WRITE CODE HERE
  }
}

// Write a function that will un-hide all the todos
function showAllTodos() {
  var todos = document.querySelectorAll(".todo");
  //WRITE CODE HERE
}

// Write a function that will hide all the todos
function hideAllTodos() {
  //WRITE CODE HERE
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
    //WRITE CODE HERE
    this.classList.add('is-active');
});

// Add an event listener to the 'completed' filter button that will show completed todos when clicked
document.getElementById("show-completed").addEventListener("click", function() {
  //WRITE CODE HERE
});
