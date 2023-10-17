// define how the todo list (data) is saved in the database
const ToDoModel = require("../models/todoModel");

// retrieve todos
module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

// add todo
module.exports.addToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log("added successfully");
    console.log(data);
    res.send(data);
  });
};
