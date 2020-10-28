const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");

const app = express();
const PORT = 4000;

// enter uri of your mongo server;

// for local use this
// const mongoURL = "mongodb://127.0.0.1:27017/CRUD-app";

// for mongo atlas server use this.
const MongoURI =
  "mongodb+srv://aakash:aa@12346@cluster0-fwwzy.mongodb.net/test?retryWrites=true";

app.use(bodyParser.json);
app.use(cors());

mongoose
  .connect(MongoURI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("connected to mongo server !!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("server running at PORT :::" + PORT);
});

app.use("/user", userRouter);
