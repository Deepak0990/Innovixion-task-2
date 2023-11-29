// Data structure to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${task}
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const newTask = taskInput.value.trim();

    if (newTask !== "") {
        tasks.push(newTask);
        taskInput.value = "";
        renderTasks();
    }
}

// Function to edit a task
function editTask(index) {
    const updatedTask = prompt("Edit task:", tasks[index]);
    
    if (updatedTask !== null) {
        tasks[index] = updatedTask.trim();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    
    if (confirmDelete) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Initial rendering of tasks
renderTasks();
