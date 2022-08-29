const carInformationValidation = (req, res, next) => {
  const { 
    brand, 
    model,
    fabrication_year,
    color,
    price,
  } = req.body;

  if (!brand || !model || !fabrication_year || !color || !price) {
    return res.status(422).json({ message: 'All fields must be fullfied' });
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
    brand, 
    model, 
    fabrication_year,
    color,
    price,
    sold,
  } = carInformation;

  const car = {
    brand, 
    model,
    fabrication_year,
    color,
    price,
    sold,
  };

  car.sold = false;

  return car;
}

module.exports = {
  carInformationValidation,
  reqCarInformation,
  updateVerification,
}