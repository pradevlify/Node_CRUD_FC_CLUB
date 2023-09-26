const mongoose = require("mongoose");

let clubSchema = new mongoose.Schema({
  cname: {
    type: String,
    required: true,
  },
  players: {
    type: String,
    required: true,
  },
  coach: {
    type: String,
    required: true,
  },
});

let clubModel = new mongoose.model("club", clubSchema);
module.exports = clubModel;
