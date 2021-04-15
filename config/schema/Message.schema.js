const mongoose = require("mongoose");
const { Schema, model } = mongoose

const messageSchema = Schema({
  message: {
    type: String,
    required: Boolean [true, "Le champ message est requis."],
    minLength: [20, "Minimum, 20 caractères requis"],
    maxLength: [256, "Maximum, 256 caractères requis"]
  },
  author: {
    type: String,
    default: "Zyrass",
    minLength: [3, "Minimum, 3 caractères requis"],
    maxLength: [25, "Maximum, 25 caractères requis"]
  }
}, {
  timestamps: true
})

module.exports = model("messages", messageSchema)
