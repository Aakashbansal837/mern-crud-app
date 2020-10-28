const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const UserModel = require("../models/User");

router.route("/").get((req, res) => {
  console.log("requset came ?");

  UserModel.find().then((err, users) => {
    if (err) {
      console.log(err);
    } else {
      console.log("response sent");
      res.json(users).status(200);
    }
  });
});

module.exports = router;
