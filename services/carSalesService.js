const carSalesDao = require('../dao/carSalesDao');

const getAll = async () => {
  const getAllCars = await carSalesDao.getAll();
  return getAllCars;
}

const getById = async (id) => {
  const getCarById = await carSalesDao.getById(id);
  return getCarById;
}
const create = async (car) => {
  if (!car) {
    throw new Error({ code: 401, message: 'The fields must be fullfield.'});
  }
  console.log(car)
  const carObject = {
    brand: car.brand,
    model: car.model,
    fabrication_year: car.fabricationYear,
    color: car.color,
    price: car.price,
  }
  
  const carCreated = await carSalesDao.create(carObject);
  return carCreated;
}

const updateOneCar = async ({car, id}) => {
  const carCreated = await carSalesDao.updateOneCar({car, id})
  return carCreated;
}

const deleteCar = async (id) => {
  const carDeleted = await carSalesDao.deleteCar(id);
  return carDeleted;
}

const getCarBrands = async () => {
  const listOfBrand = carSalesDao.getCarBrands();
  const arrayOfBrands = [];
  listOfBrand.forEach((eachBrandObjetct) => arrayOfBrands.push(eachBrandObjetct.name));
  return arrayOfBrands;
}

module.exports = {
  create,
  getAll,
  getById,
  updateOneCar,
  deleteCar,
  getCarBrands,
}