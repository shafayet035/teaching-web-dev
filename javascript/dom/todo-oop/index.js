class TodoFeature {
    constructor() {
        this.todos = [];
        this.todoInput = document.getElementById('todoInput');
        this.todoBtn = document.getElementById('btnSubmit');
        this.todosList = document.getElementById('todos');

        // Binding class 'this' to addTodo 'this'
        this.addTodo = this.addTodo.bind(this);
        this.todoBtn.addEventListener('click', this.addTodo);

        this.renderTodos();
    }

    addTodo() {
        let inputValue = this.todoInput.value;

        this.todoInput.value = 'test';
        if (!inputValue) return;

        let todo = {
            id: Date.now(),
            label: inputValue,
            completed: false,
        };

        this.todos.push(todo);
        console.log(this.todos);
        this.renderTodos();
    }

    renderTodos() {
        this.todosList.innerHTML = '';

        this.todos.forEach((todo) => {
            let item = `
                <li> 
                    <input type="checkbox" checked="${todo.completed}">
                    <span>${todo.label} </span>
                    <button>delete</button>
                </li>
            `
            this.todosList.innerHTML = this.todosList.innerHTML + item;
        })
    }
}

let x = 10;

let normal = "This is " + x;
let tempalteString = `This is ${x}`;

new TodoFeature();
