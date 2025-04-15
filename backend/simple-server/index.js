const express = require('express');
const cors = require('cors');
const { posts } = require('./data');

const app = express();

app.use(cors());

app.get('/', (request, response) => {
  response.json({
    name: 'Qader Alir Server',
    author: 'Qader Ali',
    description: 'This is a simple server from Qader Ali',
  });
});

app.get('/jamonchay', (request, response) => {
  response.json(posts);
});

app.listen(4646, () => {
  console.log('Server is running on PORT 4646');
});
