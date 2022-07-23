const express = require('express');

const bodyParser = require('body-parser');

const apiRouter = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.json({ message: "lighthose final" });
});

app.listen(PORT, () => {
  console.log(`lighthouse final is live, listening on port: ${PORT}`)
});
