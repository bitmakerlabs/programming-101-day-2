// Toggle the css class denoting completion when items are clicked

function updateCounter() {
  var allTodos = document.querySelectorAll(".todo");
  var completedTodos = document.querySelectorAll(".todo.is-complete");
  document.getElementById("counter").innerHTML = allTodos.length - completedTodos.length;
}

updateCounter();

var items = document.querySelectorAll(".todo a");
for (var i=0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
      this.parentNode.classList.toggle('is-complete');
      updateCounter();
  });
}

// Handle events for filter clicks

function deactivateAllFilters() {
  var filters = document.querySelectorAll(".todo-filter");
  for (var i=0; i < filters.length; i++) {
    filters[i].classList.remove('is-active');
  }
}

function showAllTodos() {
  var todos = document.querySelectorAll(".todo");
  for (var i=0; i < todos.length; i++) {
    todos[i].style.display = 'block';
  }
}

function hideAllTodos() {
  var todos = document.querySelectorAll(".todo");
  for (var i=0; i < todos.length; i++) {
    todos[i].style.display = 'none';
  }
}

document.getElementById("show-all").addEventListener("click", function() {
  deactivateAllFilters();
  showAllTodos();
  this.classList.add('is-active');
});


document.getElementById("show-remaining").addEventListener("click", function() {
  deactivateAllFilters();
  showAllTodos();
  var completedTodos = document.querySelectorAll(".todo.is-complete");
  for (var i=0; i < completedTodos.length; i++) {
    completedTodos[i].style.display = 'none';
  }
  this.classList.add('is-active');
});

document.getElementById("show-completed").addEventListener("click", function() {
  deactivateAllFilters();
  hideAllTodos();
  var completedTodos = document.querySelectorAll(".todo.is-complete");
  for (var i=0; i < completedTodos.length; i++) {
    completedTodos[i].style.display = 'block';
  }
  this.classList.add('is-active');
});
