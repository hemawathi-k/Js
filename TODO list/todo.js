let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    tasks.push(taskText);
    taskInput.value = '';
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newTaskText = prompt('Edit Task:', tasks[index]);
  
  if (newTaskText !== null && newTaskText.trim() !== '') {
    tasks[index] = newTaskText.trim();
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const row = document.createElement('tr');
    
    const snCell = document.createElement('td');
    snCell.textContent = index + 1;
    
    const taskCell = document.createElement('td');
    taskCell.textContent = task;
    
    const actionsCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editTask(index);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(index);
    
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);
    
    row.appendChild(snCell);
    row.appendChild(taskCell);
    row.appendChild(actionsCell);
    
    taskList.appendChild(row);
  });
}

renderTasks();
