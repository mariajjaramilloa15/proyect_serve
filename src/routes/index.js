const express = require("express");
const UserModel = require("../models/user.model");
const UserRouter = require("./user.router")

function routerApi(app) {
  const router = express.Router();
  /* Endpoint estático: http://localhost:5000/react/user */
  app.use("/react/user", router);
  /* Endpoint estático: http://localhost:5000/react/user/userModel */
  router.use("/userModel", UserModel);
  /* Endpoint estático: http://localhost:5000/react/user/userRouter */
  router.use('/userRouter', UserRouter);
}

module.exports = routerApi;
