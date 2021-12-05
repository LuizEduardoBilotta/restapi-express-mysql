const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Bem vindo!');
})

app.listen(port, () => `Application online in port: [${port}]`);