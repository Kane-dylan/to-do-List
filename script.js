document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");
  const themeButton = document.getElementById("themeButton");
  const body = document.body;

  // Load tasks from localStorage
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((taskText) => {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
      saveTasks();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
        saveTasks();
      });

      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = "";
      saveTasks();
    }
  });

  themeButton.addEventListener("click", () => {
    if (body.classList.contains("theme-ubuntu")) {
      body.classList.remove("theme-ubuntu");
      body.classList.add("theme-gray");
    } else if (body.classList.contains("theme-gray")) {
      body.classList.remove("theme-gray");
      body.classList.add("theme-terminal");
    } else {
      body.classList.remove("theme-terminal");
      body.classList.add("theme-ubuntu");
    }
    saveTheme();
  });

  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    body.classList.add("theme-terminal");
  }

  function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach((li) => {
      tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function saveTheme() {
    const currentTheme = body.classList[0];
    localStorage.setItem("theme", currentTheme);
  }
});
