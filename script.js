// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select the Add Task button
    const addButton = document.getElementById('add-task-btn');
    // Select the input field
    const taskInput = document.getElementById('task-input');
    // Select the task list
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Get the trimmed value of the input
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // When clicked, remove the task from the list
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener to allow Enter key to add a task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
