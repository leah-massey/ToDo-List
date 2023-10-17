// define how the todo list (data) is saved in the database
const ToDoModel = require("../models/todoModel");

// retrieve todos
module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};
