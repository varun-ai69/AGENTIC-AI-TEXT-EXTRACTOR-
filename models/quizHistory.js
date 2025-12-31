const mongoose = require("mongoose");
const User = require("./User")
const chatSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  title: {
    type: String,
    required: true
  },

  inputText: {
    type: String,
    required: true
  },

  output: {
    hierarchy: Object,
    quiz: Object,
    answers: Object,
    explanation: Object
  }

}, { timestamps: true });

module.exports = mongoose.model("QuizHistory", chatSchema);
