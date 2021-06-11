const puppeteer = require('puppeteer');
const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT;
const data = {};

const retornaCertificadoController = async (req, res, next) => {
    try {
        data['user'] = req.body;
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const url = `${HOSTNAME}:${PORT}/certificado`;
        console.log(url);
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080, isLandscape: true });
        await page.goto(url);
        const buffer = await page.pdf({ format: 'A4', printBackground: true, landscape: true });
        res.type('application/pdf');
        res.send(buffer);
        browser.close();
    } catch (err) {
        next(err);
        }
};

const renderizaCertificadoController = async (req, res, next) => {
    try {
        const { name } = data['user'].data;
        res.render('index', { name });
    } catch (err) {
        next(err);
        }
};

module.exports = {
    retornaCertificadoController,
    renderizaCertificadoController,
};
