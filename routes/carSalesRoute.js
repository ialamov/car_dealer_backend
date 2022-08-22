const route = require('express').Router();
const carSalesController = require('../controllers/carSalesController');
const carSalesEntityValidation = require('../middlewares/carSalesEntityValidation')

route
  .post('/', carSalesEntityValidation.carInformationValidation, carSalesController.create)
  .get('/', carSalesController.getAll)
  .get('/:id', carSalesController.getById)
  .patch('/:id', carSalesController.updateOneCar)
  .delete('/:id', carSalesController.deleteCar);

module.exports = { route };