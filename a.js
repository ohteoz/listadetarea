const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('search');

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Borrar</button>
  `;

  taskList.prepend(li); // Añadir al principio
  input.value = '';
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}

searchInput.addEventListener('input', function () {
  const filter = searchInput.value.toLowerCase();
  const tasks = taskList.getElementsByTagName('li');
  for (let i = 0; i < tasks.length; i++) {
    const text = tasks[i].textContent.toLowerCase();
    tasks[i].style.display = text.includes(filter) ? '' : 'none';
  }
});