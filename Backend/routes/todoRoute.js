const { Router } = require("express");
const { getToDo } = require("../controllers/todoController");

const routes = Router();

routes.get("/", getToDo);

module.exports = routes;
