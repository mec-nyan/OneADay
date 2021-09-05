const express = require('express');
const app = express();
const port = 3000;

const { metalGod, judasPriest } = require('./judaspriest');
app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/api', (req, res) => {
  res.status(201).json(judasPriest);
});

app.get('/api/:name', (req, res) => {
  let { name } = req.params;
  if (name) {
    name = name.replace('%20', ' ');
    // Process further modifications here
  }
  let out = judasPriest.members[name] || {};
  res.status(200).json(out);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
