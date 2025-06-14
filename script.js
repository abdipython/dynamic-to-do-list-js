document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load existing tasks from Local Storage on page load
    loadTasks();

    // Function to add a task (with optional save)
    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText)
            alert("Please enter a task.");
             return;
        }
            addButton.addEventListener('click', addTask);

    // ✔ Add event listener for Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }


        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        removeButton.onclick = function () {
            taskList.removeChild(li);
            removeFromStorage(taskText);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = "";

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Add task on button click
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        addTask(taskText);
    });

    // Add task on pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText === "") {
                alert("Please enter a task.");
                return;
            }
            addTask(taskText);
        }
    });

    // Dummy loadTasks and removeFromStorage for completeness
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(task => addTask(task, false));
    }

    function removeFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
});
