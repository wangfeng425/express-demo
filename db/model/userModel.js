const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: String,
  password: String,
  age: Number,
  _id: Object
})

module.exports = mongoose.model('user', userSchema, 'user');