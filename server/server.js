const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const { PORT = 3001 } = process.env;

const CORS = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE'],
};

app.use(cors(CORS));

app.listen(PORT, () => {
  console.log(`Rodando api em http://localhost:${PORT}`);
});
