const { json } = require("body-parser");

const carInformationValidation = (req, res, next) => {
  const { 
    category, 
    brand, 
    model,
    year_of_fabrication,
    color,
    price,
  } = req.body;

  if (!category || !brand || !model || !year_of_fabrication || !color || !price) {
    res.status(422).json({ message: 'All fields must be fullfied' });
  }

  next();
}

const updateVerification = async (carCreated) => {
  if (carCreated.matchedCount === 0) {
    throw new Error();
  }
};

const reqCarInformation = (carInformation) => {
  const {
    user, 
    category, 
    brand, 
    model, 
    name,
    year_of_fabrication,
    color,
    price,
    sold,
  } = carInformation;

  const car = {
    category, 
    brand, 
    model, 
    name,
    year_of_fabrication,
    color,
    price,
    sold,
  };

  car.sold = false;

  return car;
}

module.exports = {
  reqCarInformation,
  updateVerification,
}