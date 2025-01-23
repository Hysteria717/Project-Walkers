const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Tá rodando essa porra');
});

app.listen(PORT, () => {
  console.log(`na porta: ${PORT}`);
});
