const connection = require('./connection');

class MongoDB {
  constructor(collection) {
    connection()
      .then((db) => {
        this.db = db.collection(collection);
      });
  }

  async list() {
    return this.db.find().toArray();
  }

  async find(id) {
    return this.db.findOne({ _id: id });
  }

  async create(doc) {
    return this.db.insertOne(doc);
  }

  async delete(id) {
    return this.db.deleteOne({ _id: id });
  }

  async update(id, doc) {
    return this.db.updateOne({ _id: id }, { $set: doc });
  }
}

module.exports = MongoDB;
