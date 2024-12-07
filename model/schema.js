//require('dotenv').config();
const mongoose = require("mongoose");


const voterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  municipality: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  votingStatus: {
    type: String,
  },
});

const Voter = mongoose.model("Voter", voterSchema);

module.exports = { Voter };
