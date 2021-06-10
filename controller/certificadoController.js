const SUCCESS = 200;

const retornaCerttificadoController = async (req, res, next) => {
    try {
        const { template, data } = req.body;

        res.status(SUCCESS).json({ template, data });
    } catch (err) {
        next(err);
        }
};

module.exports = {
    retornaCerttificadoController,
};
