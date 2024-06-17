document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");
  const themeButton = document.getElementById("themeButton");
  const body = document.body;

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
      });

      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = "";
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
  });

  // Set initial theme
  body.classList.add("theme-terminal");
});
