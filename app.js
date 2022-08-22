const express = require('express');
const carSalesRoute = require('./routes/carSalesRoute');
const app = express();
// const carSalesRoute = require('./routes/carSales')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', carSalesRoute.route);

module.exports = app;