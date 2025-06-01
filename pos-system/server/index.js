import express from 'express';
import cors from 'cors';
import userTable from './db/user.js';

import AuthService from './services/auth.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.send('Hey server is healthy');
});

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;

  const user = AuthService.register(name, email, password);

  if (!user) {
    return res.status(400).json({
      message: 'Invalid email or password',
    });
  }

  res.status(201).json(user);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = AuthService.login(email, password);

  if (!user) {
    return res.status(400).json({
      message: 'Invalid email or password',
    });
  }

  res.status(200).json(user);
});

app.get('/api/me', (req, res) => {
  const userId = req.headers['x-user-id'];

  const user = userTable.getUserById(userId);

  return res.status(200).json(user);
});

app.listen(8000, () => {
  console.log('Server is Running on PORT 8000');
});
