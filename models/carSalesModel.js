const Car = require("../database/carEntity");

const getById =  async (id) => {
  return await Car.findOne({_id: id});
}

const create = async (car) => {
  return await Car.create(car);
}

const updateOneCar = async ({car, id}) => {
  return await Car.updateOne({_id: id}, car);
}

module.exports = { 
  create,
  getById,
  updateOneCar,
}