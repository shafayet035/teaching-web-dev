const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

const tweets = [];

app.post('/tweet', (req, res) => {
  const tweet = req.body;
  tweets.push(tweet);

  console.log('Tweet added to array!');

  res.json({
    success: true,
    message: 'Tweet has been posted',
  });
});

app.get('/tweets', (req, res) => {
  res.json(tweets);
});

app.listen(9000, () => {
  console.log('The server is running on http://localhost:9000');
});
