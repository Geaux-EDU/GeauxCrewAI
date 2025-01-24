const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['parent', 'student'],
    required: true
  },
  profile: {
    name: String,
    grade: Number,
    state: String
  },
  learningStyle: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
