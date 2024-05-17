// app.js

document.getElementById("add-task").addEventListener("click", function () {
  let taskInput = document.getElementById("new-task");
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    let taskList = document.getElementById("task-list");

    let li = document.createElement("li");
    li.textContent = taskText;

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

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";
  }
});
