// Масив для збереження завдань
        const tasks = [];

// Функція для відображення завдань у списку
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');

        // Додати кнопку для видалення завдання
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✔';
        deleteButton.onclick = function() {
            deleteTask(index);
        };
        taskItem.appendChild(deleteButton);

        // Додати текст завдання
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = task.text;
    taskItem.appendChild(taskTextSpan);

     // Додати клас для стилізації виконаних завдань
    if (task.completed) {
      taskTextSpan.classList.add('completed');
    }

    taskList.appendChild(taskItem);
    deleteButton.style.backgroundColor = '#ffc400'; 
        deleteButton.style.color = '#000000'; 
        deleteButton.style.fontSize = '16px'; 
        deleteButton.style.border = 'none'; 
        deleteButton.style.padding = '5px 10px'; 
        deleteButton.style.marginRight = '10px'; 
        deleteButton.style.borderRadius = '50px'; 
        deleteButton.style.cursor = 'pointer'; 
  });
}

// Функція для додавання завдання
        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskText = taskInput.value.trim();

            if (taskText !== '') {
                const newTask = {
                    text: taskText,
                    completed: false
                };

                tasks.push(newTask);
                renderTasks();
                taskInput.value = '';
            }
        }


// Функція для видалення завдання
        function deleteTask(index) {
            tasks.splice(index, 1);
            renderTasks();
        }

// Функція для очищення списку завдань
        function clearList() {
            tasks.length = 0;
            renderTasks();
        }

// Відображення початкового списку
        renderTasks();