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

const updateOneUser = async ({user, id}) => {
  return await User.updateOne({_id: id}, user);
}

const deleteUser = async (id) => {
  return await User.deleteOne({ _id: id});
}

module.exports = { 
  create,
  getAll,
  getById,
  updateOneUser,
  deleteUser,
}