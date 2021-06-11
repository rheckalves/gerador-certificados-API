const express = require('express');
const route = express.Router();

const { retornaCertificadoController, renderizaCertificadoController } = require('./controller/certificadoController');
const { validateRequestMiddleware } = require('./service/validateRequestMiddleware');
const { fetchTemplateMiddleware } = require('./service/fetchTemplateMiddleware');

route.post(
    '/certificado',
    validateRequestMiddleware,
    fetchTemplateMiddleware,
    retornaCertificadoController,
);

route.get(
    '/certificado',
    renderizaCertificadoController,
);


module.exports = route;
