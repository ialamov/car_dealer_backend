const User = require("../database/userEntity");

const getAll = async () => {
  return await User.find();
}

const getById =  async (id) => {
  return await User.findOne({_id: id});
}

const create = async (car) => {
  return await User.create(car);
}

// const updateOneCar = async ({car, id}) => {
//   return await Car.updateOne({_id: id}, car);
// }

// const deleteCar = async (id) => {
//   return await Car.deleteOne({ _id: id});
// }

module.exports = { 
  create,
  getAll,
  getById,
  // updateOneCar,
  // deleteCar,
}