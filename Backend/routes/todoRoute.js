const { Router } = require("express"); // import Router class from the express framework.
const {
  getToDo,
  addToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/todoController");

const router = Router();

router.get("/", getToDo);
router.post("/add", addToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);

module.exports = router;
