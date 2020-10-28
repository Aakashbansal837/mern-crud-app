const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const UserModel = require("../models/User");

router.route("/").get((req, res) => {
  console.log("requset came ?");

  UserModel.find()
    .then((users) => {
      console.log("response sent");
      res.json(users).status(200);
    })
    .catch((err) => console.log("error : ", err));
});

module.exports = router;
