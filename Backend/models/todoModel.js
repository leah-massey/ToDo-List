const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo", todoSchema); // "Todo" should match the name you want to use in the database(but singular) and todoSchema is the name of your schema
