const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express();

routes.get("/health", (req, res) => {
  return res.status(200).json({
    massage: "Server is on...",
  });
});

module.exports = routes;

routes.get("./users", UserController.index);
routes.post('/users', UserController.store)