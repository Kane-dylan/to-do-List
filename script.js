document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const newTaskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  addTaskBtn.addEventListener("click", addTask);
  newTaskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    taskList.appendChild(li);
    newTaskInput.value = "";
  }
});
