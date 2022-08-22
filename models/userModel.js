const User = require("../database/userEntity");

const getById =  async (id) => {
  return await Car.findOne({_id: id});
}

const create = async (car) => {
  return await Car.create(car);
}

// const updateOneCar = async ({car, id}) => {
//   return await Car.updateOne({_id: id}, car);
// }

// const deleteCar = async (id) => {
//   return await Car.deleteOne({ _id: id});
// }

module.exports = { 
  create,
  getById,
  // updateOneCar,
  // deleteCar,
}