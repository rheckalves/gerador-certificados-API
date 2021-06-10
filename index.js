const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;
const routes = require('./routes');
const errorHandlerMiddleware = require('./service/errorHandlerMiddleware');

app.use(express.json());
app.use(routes);

app.use(errorHandlerMiddleware);
app.listen(PORT, () => {
    console.log(`API Online na porta ${PORT}`);
});
