const fetch = require('node-fetch');
const { resolve } = require('path');

const fetchTemplateMiddleware = async (req, _res, next) => {
    try {
        const { template: templateUrl, data } = req.body;
        const source = await fetch(templateUrl);
        const template = await source.text();
        const fs = require('fs');
    fs.writeFile(resolve(__dirname, '..', 'views', 'layouts', 'main.hbs'), template, function(err) {
    if(err) {
        return console.log(err);
    }
});

next();
    } catch (err) {
        next(err);
        }
}

module.exports = {
    fetchTemplateMiddleware,
};
