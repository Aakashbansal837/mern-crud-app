const express = require("express");
const app = express();
const port = 4000;

const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRouter = require("./routes/user");

const db =
  "mongodb+srv://aakash:aa@12346@cluster0-fwwzy.mongodb.net/test?retryWrites=true";
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.use("/user", UserRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
