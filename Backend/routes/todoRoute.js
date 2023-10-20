const { Router } = require("express");
const {
  getToDo,
  createToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/todoController");

const router = Router();

router.get("/", getToDo);
router.post("/create", createToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);

module.exports = router;
