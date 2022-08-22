const mongoose = require('mongoose');

const User = mongoose.model('User',{
  user_name: String,
  full_name: String,
  password: String,
  tax_identification_number: Number,
  address: {
    street: String,
    neighborhood: String,
    city: String,
    state: String,
  },
  birth_date: Date,
  gender: String,
  e_mail: String,
  telephone: Number,
  active: Boolean,
})

module.exports = User;