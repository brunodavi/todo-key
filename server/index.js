const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const { PORT = 3001 } = process.env;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Rodando api em http://localhost:${PORT}`);
});
