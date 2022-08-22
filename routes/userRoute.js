const route = require('express').Router();
const userController = require('../controllers/userController');
const userEntityValidation = require('../middlewares/userEntityValidation')

route
  .post('/', userEntityValidation.userInformationValidation, userController.create)
  .get('/', userController.getAll)
  .get('/:id', userController.getById)
  .patch('/:id', userController.updateOneUser)
  .delete('/:id',userController.deleteUser);

module.exports = { route };