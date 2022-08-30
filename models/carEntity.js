const mongoose = require('mongoose');

const Car = mongoose.model('Car',{
  brand: String,
  model: String,
  fabrication_year: Number,
  color: String,
  price: Number,
})

module.exports = Car;