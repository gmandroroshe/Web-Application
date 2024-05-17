// app.js

document.getElementById("add-task").addEventListener("click", function () {
  let taskInput = document.getElementById("new-task");
  let taskTimeInput = document.getElementById("task-time");
  let taskText = taskInput.value.trim();
  let taskTime = taskTimeInput.value;

  if (taskText !== "" && taskTime !== "") {
    let taskList = document.getElementById("task-list");

    let li = document.createElement("li");
    li.textContent = taskText;

    let timeSpan = document.createElement("span");
    timeSpan.textContent = `Due: ${taskTime}`;
    timeSpan.classList.add("task-time");

    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(timeSpan);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    li.dataset.time = taskTime;

    taskList.appendChild(li);
    taskInput.value = "";
    taskTimeInput.value = "";
  }
});

function checkAlarms() {
  let taskListItems = document.querySelectorAll("#task-list li");
  let currentTime = new Date();
  let currentHours = String(currentTime.getHours()).padStart(2, "0");
  let currentMinutes = String(currentTime.getMinutes()).padStart(2, "0");
  let currentFormattedTime = `${currentHours}:${currentMinutes}`;

  taskListItems.forEach(function (li) {
    if (
      li.dataset.time === currentFormattedTime &&
      !li.classList.contains("completed")
    ) {
      document.getElementById("alarm-sound").play();
      li.classList.add("completed"); // Mark the task as completed to prevent multiple alarms
    }
  });
}

// Check alarms every minute
setInterval(checkAlarms, 60000);
