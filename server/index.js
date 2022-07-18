const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
  res.json({ message: "lighthose final" });
});

app.listen(PORT, () => {
  console.log(`lighthouse final is live, listening on port: ${PORT}`)
});
