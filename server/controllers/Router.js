const express = require('express');
const rescue = require('express-rescue');
const { OK, CREATED } = require('http-status');

const modules = require('../modules');

const router = express.Router();

function Router(path, dbName) {
  const db = modules[dbName];

  router.post(`/${path}`, rescue(async (req, res) => {
    const result = await db.create(req.body);
    res.status(CREATED).send(result);
  }));

  router.get(`/${path}`, rescue(async (_req, res) => {
    const result = await db.list();
    res.status(OK).send(result);
  }));

  router.get(`/${path}/:id`, rescue(async (req, res) => {
    const result = await db.find(req.param.id);
    res.status(OK).send(result);
  }));

  router.delete(`/${path}/:id`, rescue(async (req, res) => {
    const result = await db.delete(req.param.id);
    res.status(OK).send(result);
  }));

  router.put(`/${path}/:id`, rescue(async (req, res) => {
    const result = await db.update(req.param.id, req.body);
    res.status(OK).send(result);
  }));
}

module.exports = Router;
