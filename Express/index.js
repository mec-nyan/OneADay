const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/api', (req, res) => {
  const metalGod = 'Rob Halford';
  const judasPriest = {
    vocals: metalGod,
    guitars: {
      rhythm: 'K.K. Downing',
      lead: 'Glenn Tipton',
    },
    bass: 'Ian Hill',
    drums: 'Scott Travis',
  };

  res.status(201).json(judasPriest);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
