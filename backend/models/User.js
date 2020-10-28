const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
});

const UserModal = mongoose.model("User", User);

module.exports = UserModal;
