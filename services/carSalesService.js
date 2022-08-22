const carSalesModel = require('../models/carSalesModel');

const getById = async (id) => {
  const getCarById = await carSalesModel.getById(id);
  return getCarById;
}
const create = async (car) => {
  if (!car) {
    throw new Error({ code: 401, message: 'The fields must be fullfield.'});
  }
  const carCreated = await carSalesModel.create(car);
  return carCreated;
}

const updateOneCar = async ({car, id}) => {
  const carCreated = await carSalesModel.updateOneCar({car, id})
  return carCreated;
}

const deleteCar = async (id) => {
  const carDeleted = await carSalesModel.deleteCar(id);
  return carDeleted;
}

module.exports = {
  create,
  getById,
  updateOneCar,
  deleteCar,
}