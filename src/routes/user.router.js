const express = require('express');
const UserService = require('../services/user.service');
const UserModel = require('../models/user.model');
const UserRouter = express.Router();
const service = new UserService();

//EndPoints
UserRouter.post('/user', async (req, res) => {
  const user = UserModel(req.body);
  await service
    .createUser(user)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

UserRouter.get('/', async (req, res) => {
  await service
    .listUser()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

UserRouter.get('/:UserId', async (req, res) => {
  const { UserId } = req.params;
  await service
    .showUser(UserId)
    .then((data) => res.status(302).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

UserRouter.put('/:UserId', async (req, res) => {
  const { UserId } = req.params;
  const { name, lastname, email, password, active } = req.body;
  await service
    .editUser({ _id: UserId, name, lastname, email, password, active })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(304).json({ message: err }));
});

UserRouter.delete('/:UserId', async (req, res) => {
  const { UserId } = req.params;
  await service
    .removeUser(UserId)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

module.exports = UserRouter;
