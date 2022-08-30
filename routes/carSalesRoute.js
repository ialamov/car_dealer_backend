const route = require('express').Router();
const carSalesController = require('../controllers/carSalesController');
const carSalesEntityValidation = require('../middlewares/carSalesEntityValidation')

route
  .post('/', carSalesEntityValidation.carInformationValidation, carSalesController.create)
  .get('/', carSalesController.getAll)
  .get('/brands', carSalesController.getCarBrands)
  .get('/:id', carSalesController.getById)
  .put('/:id', carSalesController.updateOneCar)
  .delete('/:id', carSalesController.deleteCar);

module.exports = { route };