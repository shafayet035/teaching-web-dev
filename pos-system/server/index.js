import express from 'express';
import cors from 'cors';
import userTable from './db/user.js';
import productTable from './db/product.js';
import AuthService from './services/auth.js';
import Product from './models/product.js';

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

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  return res.status(200).json(user);
});

app.get('/api/products', (req, res) => {
  const userId = req.headers['x-user-id'];

  const products = productTable.getProductsByUserId(userId);

  return res.status(200).json(products);
});

app.post('/api/product', (req, res) => {
  const userId = req.headers['x-user-id'];

  const { name, image, price, description } = req.body;

  const newProduct = new Product(userId, {
    price: price,
    description: description,
    name: name,
    image: image,
  });

  productTable.addProduct(newProduct);

  return res.status(201).json(newProduct);
});

app.listen(9000, () => {
  console.log('Server is Running on PORT 9000');
});
