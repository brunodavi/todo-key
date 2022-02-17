import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

class GenerateAPI {
  constructor(path) {
    this.path = path;
  }

  async list() {
    return instance.get(this.path);
  }

  async create(data) {
    return instance.post(this.path, data);
  }

  async updateById(id, data) {
    return instance.post(`${this.path}/${id}`, data);
  }

  async deleteById(id) {
    return instance.post(`${this.path}/${id}`);
  }

  async findById(id) {
    return instance.post(`${this.path}/${id}`);
  }
}

export default {
  task: new GenerateAPI('/task'),
};
