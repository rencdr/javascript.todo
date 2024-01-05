document.addEventListener('DOMContentLoaded', function () {
    // Array to store todos
    let todos = [];
  
    // Function to render todos
    function renderTodos() {
      const todoList = document.getElementById('todoList');
      todoList.innerHTML = ''; // Clear the existing list
  
      todos.forEach(function (todo, index) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          ${todo}
          <button onclick="removeTodo(${index})">Remove</button>
        `;
        todoList.appendChild(listItem);
      });
    }
  
    // Function to add todo
    window.addTodo = function () {
      const newTodoInput = document.getElementById('newTodo');
      const newTodo = newTodoInput.value.trim();
  
      if (newTodo !== '') {
        todos.push(newTodo);
        newTodoInput.value = ''; // Clear the input
        renderTodos(); // Update the list
      }
    };
  
    // Function to remove todo
    window.removeTodo = function (index) {
      todos.splice(index, 1);
      renderTodos(); // Update the list
    };
  });
  