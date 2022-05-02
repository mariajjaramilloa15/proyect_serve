const express = require("express");
const UserRouter = require("./user.router");

function router(app) {
  const router = express.Router();
  /* Endpoint estático: http://localhost:3977/api/v1 */
  app.use("/api/v1", router);
  /* Endpoint estático: http://localhost:3977/api/v1/users */
  router.use("/users", UserRouter);
}

module.exports = router;
