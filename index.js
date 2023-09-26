const express = require("express");
const mongoose = require("mongoose");
const homeRoute = require("./routes/home");
const bodyparser = require("body-parser");
const app = express();

// db
mongoose.connect("mongodb://localhost:27017/nodejs_crud", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", () => {
  console.log("error occured");
});
db.once("open", () => {
  console.log("db connection successfully done");
});
// db
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/", homeRoute);

const port = 5000;
app.listen(port, () => {
  console.log("express server started");
});
