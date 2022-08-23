const mongoose = require('mongoose');

const Car = mongoose.model('Car',{
  user: String,
  category: String,
  brand: String,
  model: String,
  year_of_fabrication: Date,
  color: String,
  price: Number,
  sold: Boolean,
})

module.exports = Car;