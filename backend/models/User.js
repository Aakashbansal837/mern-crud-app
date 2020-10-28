const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
});

mongoose.model("User", User);
