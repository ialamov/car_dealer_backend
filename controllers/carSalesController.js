const carSalesService = require('../services/carSalesService');
const carSalesEntityValidation = require('../middlewares/carSalesEntityValidation')

const getAll = async (req, res) => {
  try {
    const getAllCars = await carSalesService.getAll();
    return res.status(200).json(getAllCars);
  } catch (error) {
    return res.status(422).json({ message: 'The list is empty.'});
  }
}

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getCarById = await carSalesService.getById(id);
    return res.status(200).json(getCarById);
  } catch (error) {
    return res.status(422).json({ message: 'This car was not found.'});
  }
};

const create = async (req, res) => {
  const carInformation = carSalesEntityValidation.reqCarInformation(req.body);
  
  try {
    const carCreated = await carSalesService.create(carInformation);
    return res.status(201).json({ message: `Created with success the new sale: ${carCreated}`});
  } catch (error) {
    return res.status(error.code).json(error.message);
  }
}

const updateOneCar = async (req, res) => {
  console.log(req)
  const car = carSalesEntityValidation.reqCarInformation(req.body);
  const { id } = req.params;
  try {
    const carCreated = await carSalesService.updateOneCar(car, id);
    carSalesEntityValidation.updateVerification(carCreated);
    return res.status(201).json({ message: `The information was update with success. ${carCreated}`});
  } catch (error) {
    return res.status(422).json({ message: 'At least one fild must be changed'});
  }
}

const deleteCar = async (req, res) => {
  const { id } = req.params;
  try {
    const carDeleted = await carSalesService.deleteCar(id);
    return res.status(201).json({ message: `Car ${carDeleted} deleted`});
  } catch (error) {
    return res.status(422).json({ message: 'You must delete an active car' });
  }
}

const getCarBrands = async (req, res) => {
  try {
    const listCarBrands = await carSalesService.getCarBrands();
    return res.status(200).json(listCarBrands);
  } catch (error) {
    return res.status(500).json({ message: 'There is a problem in the server. Try again later.' });
  }
}

module.exports = { 
  create,
  getAll,
  getById,
  updateOneCar,
  deleteCar,
  getCarBrands,
}