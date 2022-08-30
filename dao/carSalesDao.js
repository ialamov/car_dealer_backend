const Car = require("../models/carEntity");
const mockApiCarBrands = require('../utils/mockApiCarBrands');

const getAll = async () => {
  return await Car.find();
}

const getById =  async (id) => {
  return await Car.findOne({_id: id});
}

const create = async (car) => {
  return await Car.create(car);
}

const updateOneCar = async (car, id) => {
  return await Car.updateOne({ _id: id }, car );
}

const deleteCar = async (id) => {
  return await Car.deleteOne({ _id: id});
}

const getCarBrands = () => {
  return mockApiCarBrands;
}

module.exports = { 
  create,
  getAll,
  getById,
  updateOneCar,
  deleteCar,
  getCarBrands,
}