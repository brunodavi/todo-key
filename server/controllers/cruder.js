const express = require('express');
const rescue = require('express-rescue');
const { OK, CREATED } = require('http-status');

const modules = require('../modules');

const router = express.Router({ mergeParams: true });

function cruder(dbName) {
  const db = modules[dbName];

  router.post('/', rescue(async (req, res) => {
    const result = await db.create(req.body);
    res.status(CREATED).send(result);
  }));

  router.get('/', rescue(async (_req, res) => {
    const result = await db.list();
    res.status(OK).send(result);
  }));

  router.get('/:id', rescue(async (req, res) => {
    const result = await db.find(req.param.id);
    res.status(OK).send(result);
  }));

  router.delete('/:id', rescue(async (req, res) => {
    const result = await db.delete(req.param.id);
    res.status(OK).send(result);
  }));

  router.put('/:id', rescue(async (req, res) => {
    const result = await db.update(req.param.id, req.body);
    res.status(OK).send(result);
  }));

  return router;
}

module.exports = cruder;
