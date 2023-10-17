const { Router } = require("express"); // import Router class from the express framework.
const { getToDo, addToDo } = require("../controllers/todoController");

const router = Router();

router.get("/", getToDo);
router.post("/add", addToDo);

module.exports = router;
