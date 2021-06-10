const Joi = require('joi');
const { BadRequestException } = require('../exception');

const validateRequestMiddleware = (req, _res, next) => {
    const requestBodySchemaRules = {
    template: Joi.string().uri().empty('').required(),
    data: Joi.object({
      name: Joi.string().empty('').required(),
    }).required(),
  };

  const requestSchema = Joi.object(requestBodySchemaRules);
      const { error } = requestSchema.validate(req.body);
      if (error) throw new BadRequestException(error.details[0].message);
      next();
    };

module.exports = {
  validateRequestMiddleware,
};