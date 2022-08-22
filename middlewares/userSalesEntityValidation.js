const userInformationValidation = (req, res, next) => {
  const { 
    user_name,
    full_name,
    password,
    tax_identification_number,
    address: {
      street,
      neighborhood,
      city,
      state,
      zip_code,
    },
    birth_date,
    gender,
    e_mail,
    telephone,
  } = req.body;

  if (!user_name || !full_name || !password || !tax_identification_number || !street || !neighborhood
    || !city || !state || !zip_code || ! birth_date || !gender || !e_mail || !telephone) {
      
    return res.status(422).json({ message: 'All fields must be fullfied' });
  }

  next();
}

const updateVerification = async (carCreated) => {
  if (carCreated.matchedCount === 0) {
    throw new Error();
  }
};

const reqCarInformation = (userInformation) => {
  const {
    user_name,
    full_name,
    password,
    tax_identification_number,
    address: {
      street,
      neighborhood,
      city,
      state,
      zip_code,
    },
    birth_date,
    gender,
    e_mail,
    telephone,
    active,
  } = userInformation;

  const user = {
    user_name,
    full_name,
    password,
    tax_identification_number,
    address: {
      street,
      neighborhood,
      city,
      state,
      zip_code,
    },
    birth_date,
    gender,
    e_mail,
    telephone,
    active,
  };

  user.active = true;

  return user;
}

module.exports = {
  reqCarInformation,
  updateVerification,
}