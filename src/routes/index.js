const express = require("express");
const UserModel = require("../models/user.model");
const UserRouter = require("./user.router")

function routerApi(app) {
  const router = express.Router();
  /* Endpoint estático: http://localhost:3977//api/v1/user */
  app.use("/api/v1/user", router);
  /* Endpoint estático: http://localhost:3977/api/v1/user/userModel */
  router.use("/userModel", UserModel);
  /* Endpoint estático: http://localhost:3977/api/v1/user/userRouter */
  router.use('/userRouter', UserRouter);
}

module.exports = routerApi;
