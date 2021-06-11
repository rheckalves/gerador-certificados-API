const renderizaCerttificadoMiddleware = async (req, res, next) => {
    try {
        const { name } = req.body.data;
        res.render('index', { name });
        next();
    } catch (err) {
        next(err);
        }
};

module.exports = {
    renderizaCerttificadoMiddleware,
};
