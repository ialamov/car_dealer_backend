const userModel = require('../models/userModel');

const getAll = async () => {
  const getAllUsers = await userModel.getAll();
  return getAllUsers;
}

const getById = async (id) => {
  const getUserById = await userModel.getById(id);
  return getUserById;
}

const create = async (user) => {
  if (!user) {
    throw new Error({ code: 401, message: 'The fields must be fullfield.'});
  }
  const userCreated = await userModel.create(car);
  return userCreated;
}

// const updateOneCar = async ({car, id}) => {
//   const carCreated = await carSalesModel.updateOneCar({car, id})
//   return carCreated;
// }

// const deleteCar = async (id) => {
//   const carDeleted = await carSalesModel.deleteCar(id);
//   return carDeleted;
// }

module.exports = {
  create,
  getAll,
  getById,
  // updateOneCar,
  // deleteCar,
}