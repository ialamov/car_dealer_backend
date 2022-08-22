const userService = require('../services/userService');
const userEntityValidation = require('../middlewares/userEntityValidation');

const getAll = async (_req, res) => {
  try {
    const getAllUsers = await userService.getAll();
    return res.status(200).json(getAllUsers);
  } catch (error) {
    return res.status(422).json({ message: 'The list is empty.'});
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getUserById = await userService.getById(id);
    return res.status(200).json(getUserById);
  } catch (error) {
    return res.status(422).json({ message: 'This user was not found.'});
  }
};

const create = async (req, res) => {
  const userInformation = userEntityValidation.reqUserInformation(req.body);
  
  try {
    const userCreated = await userService.create(userInformation);
    return res.status(201).json({ message: `New user created: ${userCreated}`});
  } catch (error) {
    return res.status(error.code).json(error.message);
  }
}

const updateOneUser = async (req, res) => {
  const userInformation = userEntityValidation.reqUserInformation(req.body);
  try {
    const userCreated = await userService.create(userInformation);
    userEntityValidation.updateVerification(userCreated);
    return res.status(201).json({ message: `Updated the user information to ${userCreated}`});
  } catch (error) {
    return res.status(422).json({ message: 'At least one fild must be changed'});
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userDeleted = await userService.deleteUser(id);
    return res.status(201).json({ message: `All user information was deleted. ${userDeleted}`});
  } catch (error) {
    return res.status(422).json({ message: 'You must delete an active user' });
  }
}

module.exports = { 
  create,
  getAll,
  getById,
  updateOneUser,
  deleteUser,
}