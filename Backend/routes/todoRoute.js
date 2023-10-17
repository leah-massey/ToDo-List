const { Router } = require("express"); // import Router class from the express framework.
const {
  getToDo,
  addToDo,
  updateToDo,
} = require("../controllers/todoController");

const router = Router();

router.get("/", getToDo);
router.post("/add", addToDo);
router.post("/update", updateToDo);

module.exports = router;
