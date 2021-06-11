const express = require('express');
const route = express.Router();
// const { resolve } = require('path');

const { retornaCertificadoController, renderizaCertificadoController } = require('./controller/certificadoController');
const { validateRequestMiddleware } = require('./service/validateRequestMiddleware');
const { fetchTemplateMiddleware } = require('./service/fetchTemplateMiddleware');
const { renderizaCertificadoMiddleware } = require('./service/renderizaCertificadoMiddleware');

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


// route.get('/certificado/html', (_req, res) => res.sendFile(resolve(__dirname, 'public', 'index.html')));

module.exports = route;
