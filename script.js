document.addEventListener('DOMContentLoaded', function (){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load existing tasks from Local Storage on page load
    loadTasks();

    // Function to add a task (with optional save)
    function addTask(taskText, save = true) {
        if (!taskText) return;

        // Create the list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Remove task on click and update Local Storage
        removeButton.onclick = function () {
            taskList.removeChild(li);
            removeFromStorage(taskText);
        };

        // Append button to list item, then to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // If adding manually, save to Local Storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Handle Add button click
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
    });
});