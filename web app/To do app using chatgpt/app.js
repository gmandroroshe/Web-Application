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

    taskList.appendChild(li);
    taskInput.value = "";
    taskTimeInput.value = "";
  }
});
