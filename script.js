// JavaScript functionality
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('task-count');

let totalTasks = 0;

// Function to add a new task
const addTask = () => {
  const taskText = todoInput.value.trim();
  if (!taskText) return; // Prevent adding empty tasks

  const li = document.createElement('li');
  li.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  const text = document.createElement('span');
  text.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    totalTasks--;
    updateTaskCount();
  });

  li.append(checkbox, text, deleteBtn);
  todoList.appendChild(li);

  totalTasks++;
  updateTaskCount();
  todoInput.value = ''; // Clear input
};

// Function to update task count
const updateTaskCount = () => {
  taskCount.textContent = `Total Tasks: ${totalTasks}`;
};

// Event listeners
addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
