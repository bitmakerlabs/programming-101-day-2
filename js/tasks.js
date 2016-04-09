// Write a function that updates the counter based on which tasks are completed

function updateCounter() {
  var allTasks = document.querySelectorAll(".task");
  var completedTasks = document.querySelectorAll(".task.is-complete");
  var remainingTasksCount = allTasks.length - completedTasks.length;
  document.getElementById("counter").innerHTML = remainingTasksCount;
}

// Run the function you just wrote to update the counter

updateCounter();

// Add an event listener to each of the tasks which will toggle the 'is-complete' css class when clicked

var items = document.querySelectorAll(".task a");
for (var i=0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
    this.parentNode.classList.toggle('is-complete');
    updateCounter();
  });
}
