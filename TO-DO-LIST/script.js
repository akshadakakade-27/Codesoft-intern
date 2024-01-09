let taskCount = 0;
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        taskCount++; 

        const taskText = document.createTextNode(`${taskCount}. ${taskInput.value}`);
        const listItem = document.createElement('li');

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function () {
            taskList.removeChild(listItem);
            updateTaskNumbers(); 
        };

        listItem.appendChild(taskText);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}

function updateTaskNumbers() {
    const taskItems = document.querySelectorAll('#taskList li');
    taskCount = 0;

    taskItems.forEach((item, index) => {
        taskCount++;
        const taskText = item.firstChild;
        taskText.nodeValue = `${taskCount}. ${taskText.nodeValue.slice(3)}`;
    });
}
