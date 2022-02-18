import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const task = {
  path: '/task',

  async list() {
    return instance.get(this.path);
  },

  async create(data) {
    return instance.post(this.path, data);
  },

  async updateById(id, data) {
    return instance.put(`${this.path}/${id}`, data);
  },

  async deleteById(id) {
    return instance.delete(`${this.path}/${id}`);
  },

  async findById(id) {
    return instance.get(`${this.path}/${id}`);
  },
};

export default {
  task,
};
