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

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("Updated Successfully"))
    .catch((err) => {
      console.log(err);
    });
};
