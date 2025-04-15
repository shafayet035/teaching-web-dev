class Todos {
    todos = [];

    addTodos(todo) {
        this.todos.push(todo);
    }

    deleteTodo(index) {
        this.todos = this.todos.filter((t, i) => i !== index)
    }
    
    getTodo(index) {
        return this.todos[index];
    }
}


const todoApp = new Todos();

console.log(todoApp.todos);

todoApp.addTodos("Doing X");
todoApp.addTodos("Doing Y");
todoApp.addTodos("Doing Z");
todoApp.addTodos("Doing W");
todoApp.addTodos("Doing V");
todoApp.addTodos("Doing C");

console.log(todoApp.todos);

todoApp.deleteTodo(3);
console.log(todoApp.todos);

