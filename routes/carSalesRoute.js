const route = require('express').Router();
const carSalesController = require('../controllers/carSalesController');

route
  .post('/', carSalesController.create)
  .get('/:id', carSalesController.getById)
  .patch('/:id', carSalesController.updateOneCar)
  // .delete('/:id')

module.exports = { route };