const app = require('./app');
require('dotenv').config();
const mongoose = require('mongoose');

const DB_USER = 'admin';
const DB_PASSWORD = encodeURIComponent('pN_wjD6VrW*K266Mt_xTie-G');

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@clustercardealerapi.vq7cs26.mongodb.net/cardatabase?retryWrites=true&w=majority`)
  .then(
    app.listen(3000)
    )
  .catch((error) => console.log('not connecting'));

// URL: mongodb+srv://admin:pN_wjD6VrW*K266Mt_xTie-G@clustercardealerapi.vq7cs26.mongodb.net/cardatabase?retryWrites=true&w=majority
//Password: pN_wjD6VrW*K266Mt_xTie-G