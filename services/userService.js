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

const updateOneUser = async ({user, id}) => {
  const userCreated = await userModel.updateOneUser({user, id})
  return userCreated;
}

const deleteUser = async (id) => {
  const userDeleted = await userModel.deleteUser(id);
  return userDeleted;
}

module.exports = {
  create,
  getAll,
  getById,
  updateOneUser,
  deleteUser,
}