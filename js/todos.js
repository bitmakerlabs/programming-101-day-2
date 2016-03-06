// Write a function that updates the counter based on which todos are completed

function updateCounter() {
  var allTodos = document.querySelectorAll(".todo");
  var completedTodos = document.querySelectorAll(".todo.is-complete");
  var remainingTodosCount = allTodos.length - completedTodos.length;
  document.getElementById("counter").innerHTML = remainingTodosCount;
  if (remainingTodosCount == 0) {
    document.querySelector('.todo-empty').style.display = 'block';
  } else {
    document.querySelector('.todo-empty').style.display = 'none';
  }
}

// Run the function you just wrote to update the counter

updateCounter();

// Add an event listener to each of the todos which will toggle the 'is-complete' css class when clicked

var items = document.querySelectorAll(".todo a");
for (var i=0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
      this.parentNode.classList.toggle('is-complete');
      updateCounter();
  });
}

// Write a function that will un-highlight all the filter buttons

function deactivateAllFilters() {
  var filters = document.querySelectorAll(".todo-filter");
  for (var i=0; i < filters.length; i++) {
    filters[i].classList.remove('is-active');
  }
}

// Write a function that will un-hide all the todos

function showAllTodos() {
  var todos = document.querySelectorAll(".todo");
  for (var i=0; i < todos.length; i++) {
    todos[i].style.display = 'block';
  }
}

// Write a function that will hide all the todos

function hideAllTodos() {
  var todos = document.querySelectorAll(".todo");
  for (var i=0; i < todos.length; i++) {
    todos[i].style.display = 'none';
  }
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
  var completedTodos = document.querySelectorAll(".todo.is-complete");
  for (var i=0; i < completedTodos.length; i++) {
    completedTodos[i].style.display = 'none';
  }
  this.classList.add('is-active');
});

// Add an event listener to the 'completed' filter button that will show completed todos when clicked

document.getElementById("show-completed").addEventListener("click", function() {
  deactivateAllFilters();
  hideAllTodos();
  var completedTodos = document.querySelectorAll(".todo.is-complete");
  for (var i=0; i < completedTodos.length; i++) {
    completedTodos[i].style.display = 'block';
  }
  this.classList.add('is-active');
});
