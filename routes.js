const express = require('express');

const route = express.Router();

const { retornaCerttificadoController } = require('./controller/certificadoController');
const { validateRequestMiddleware } = require('./service/validateRequestMiddleware');

route.post(
    '/certificado',
    validateRequestMiddleware,
    retornaCerttificadoController,
);

module.exports = route;
