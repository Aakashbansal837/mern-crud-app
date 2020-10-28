const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const UserModel = require("../models/User");

router.route("/").get((req, res) => {
  console.log("requset came ?");
  let data = ["abc", "asd"];
  console.log("response sent");
  res.json(data).status(200);
  //   UserModel.find().then((err, users) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //     }
  //   });
});

module.exports = router;
