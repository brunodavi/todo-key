const { MongoClient } = require('mongodb');
require('dotenv').config();

const { DB_URL, DB_NAME } = process.env;
let schema = null;

async function connection() {
  if (schema) return Promise.resolve(schema);
  return MongoClient
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    });
}

module.exports = connection;
