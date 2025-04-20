const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.send('Server is healthy!');
});

/*
    todo => title, completed: boolean
*/
let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todo', (req, res) => {
  const todo = req.body;

  todos.push({
    id: todos.length + 1,
    title: todo.title,
    completed: todo.completed,
  });

  res.json({
    success: true,
    message: 'Todo has been added',
  });
});

app.get('/todos/:id', (req, res) => {
  const id = req.params['id'];

  const foundTodo = todos.find((item) => String(item.id) === id);

  res.json(foundTodo);
});

app.put('/todos/:id', (req, res) => {
  const id = req.params.id;

  const todoIndex = todos.findIndex((item) => String(item.id) === id);

  const oldTodo = todos[todoIndex];

  oldTodo.completed = true;

  todos[todoIndex] = oldTodo;

  res.json({
    success: true,
    message: 'Todo has been updated',
  });
});

app.delete('/todos/:id', (req, res) => {});

app.listen(8080, () => {
  console.log('Server is running on PORT => 8080');
});
