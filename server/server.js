const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const { PORT = 3001 } = process.env;

const CORS = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE'],
};

const error = require('./middleware/error');
const root = require('./controllers/root');

app.use(express.json());
app.use(cors(CORS));

app.use('/', root);

app.use(error);

app.listen(PORT, () => {
  console.log(`Rodando api em http://localhost:${PORT}`);
});
