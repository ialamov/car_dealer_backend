const userService = require('../services/userService');
const userEntityValidation = require('../middlewares/userEntityValidation');

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getUserById = await userService.getById(id);
    return res.status(200).json(getUserById);
  } catch (error) {
    return res.status(422).json({ message: 'This car was not found.'});
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

// const updateOneCar = async (req, res) => {
//   const userInformation = userEntityValidation.reqUserInformation(req.body);
//   try {
//     const carCreated = await carService.create(carInformation);
//     carEntityValidation.updateVerification(carCreated);
//     return res.status(201).json({ message: `Created with success the new sale: ${carCreated}`});
//   } catch (error) {
//     return res.status(422).json({ message: 'At least one fild must be changed'});
//   }
// }

// const deleteCar = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const carDeleted = await carService.deleteCar(id);
//     return res.status(201).json({ message: `Car ${carDeleted} deleted`});
//   } catch (error) {
//     return res.status(422).json({ message: 'You must delete an active car' });
//   }
// }

module.exports = { 
  create,
  // getById,
  // updateOneCar,
  // deleteCar,
}