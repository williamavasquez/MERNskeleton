const mongoose = require('mongoose')

// Create Schema
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: false }
)

module.exports = User = mongoose.model('users', UserSchema)
