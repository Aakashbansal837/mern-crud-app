const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");

router.use(cors());
router.use(bodyParser.json());

router.get("/", (req, res) => {
  if (err) {
    console.log(err);
  } else {
    res.json({ message: "all working fine", success: true });
  }
});

module.exports = router;
