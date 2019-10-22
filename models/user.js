const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdEvents: [
    // It is not the object here, it's just a field data
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
