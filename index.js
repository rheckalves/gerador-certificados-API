const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const handlebars = require('express-handlebars');
const PORT = process.env.PORT;
const routes = require('./routes');
const errorHandlerMiddleware = require('./service/errorHandlerMiddleware');

app.engine('hbs', handlebars({
    extname: '.hbs',
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(routes);

app.use(errorHandlerMiddleware);
app.listen(PORT, () => {
    console.log(`API Online na porta ${PORT}`);
});
