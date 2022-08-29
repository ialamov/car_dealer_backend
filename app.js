const express = require('express');
const carSalesRoute = require('./routes/carSalesRoute');
const userRoute = require('./routes/userRoute');
const cors = require('cors');
const app = express();
// const carSalesRoute = require('./routes/carSales')

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/carsales', carSalesRoute.route);
app.use('/user', userRoute.route);
// app.use('/login', loginRoute.route);

module.exports = app;