// create schema for todo list

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ToDo", todoSchema); //"ToDo" should match the name in collection in mongoDB database but singular, todoSchema is name of schema.
