let todoInput = document.querySelector('#todoInput');
let todoAddBtn = document.querySelector('#todoAddBtn');
let todoList = document.querySelector('#todoList');

let todos = [
    {
        id: 1,
        label: 'Test',
        completed: false,
    },
    {
        id: 2,
        label: 'Test Returns',
        completed: true
    },
    {
        id: 3,
        label: 'Urunto Test',
        completed: false
    }
];

function deleteListItem(id) {
    let tempTodos = [];

    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id != id) {
            tempTodos.push(todos[i]);
        }
    }
    todos = tempTodos;
    renderTodos(todos);
}

function renderTodos(todolists) {
    todoList.innerHTML = '';
    for(let i = 0; i < todolists.length; i = i+1) {
       let li = createTodoList(todolists[i]);
        todoList.appendChild(li);
    }
}

// A Function to create a list item
function createTodoList(todo) {
    // create li element
    let li = document.createElement('li');
    li.className = 'todo-item';

    // create checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-check';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function(e) {
        li.classList.toggle('completed');
    })

    // create span
    let textSpan = document.createElement('span');
    textSpan.className = 'todo-text';
    textSpan.textContent = todo.label;

    // create button
    let delBtn = document.createElement('button');
    delBtn.className = 'todo-del-btn';
    delBtn.textContent = 'delete';
    delBtn.addEventListener('click', function() {
       deleteListItem(todo.id)
    })

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(delBtn);

    return li;
}

// A Function to add todo to List
function addTodo() {
    let inputValue = todoInput.value;
    if (!inputValue) return;

    let todo = {
        id: Date.now(),
        label: inputValue,
        completed: false,
    };

    todos.push(todo);
    renderTodos(todos);
    todoInput.value = '';
}

todoAddBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keyup', function(event){
    if(event.key == 'Enter') {
        addTodo();
    }
})

renderTodos(todos);