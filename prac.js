
const addButton = document.querySelector('.add');
const deleteButton = document.querySelector('.delete');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#taskList');

let taskCount = 0;


addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        taskCount += 1;

        
        const listItem = document.createElement('li');
        listItem.textContent = `${taskCount}. ${taskText}`;

        
        taskList.appendChild(listItem);

        
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
});


deleteButton.addEventListener('click', () => {
    taskList.innerHTML = ""; 
    taskCount = 0;
});
