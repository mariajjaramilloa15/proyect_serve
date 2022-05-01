const express = require('express');
const userModel = require('../models/user.model');

function routerApi(app) {
  const router = express.Router();
  /* Endpoint estático: http://localhost:5000/react/user */
  app.use('/react/user', router);
  /* Endpoint estático: http://localhost:5000/react/user/userModel */
  router.use('/userModel', userModel);
}

module.exports = routerApi;