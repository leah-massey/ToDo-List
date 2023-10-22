const { Router } = require("express");
const {
  getToDo,
  createToDo,
  updateToDo,
  deleteToDo,
  getPing,
} = require("../controllers/todoController");

const router = Router();

router.get("/", getToDo);
router.post("/create", createToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);
router.get("/ping", getPing);

module.exports = router;
