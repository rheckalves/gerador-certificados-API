const {
    BadRequestException,
    } = require('../exception');
    
    const {
      BAD_REQUEST,
      INTERNAL_SERVER_ERROR,
    } = require('../exception/errorResponse');
    
    const errorHandlerMiddleware = (err, _req, res, _next) => {
      if (err instanceof BadRequestException) {
        return res.status(BAD_REQUEST).json({
            status: 'Bad Request',
            message: err.message,
          });
      }
    
      return res.status(INTERNAL_SERVER_ERROR).json({
        status: 'Internal server error',
        message: err.message,
      });
    };
    
    module.exports = errorHandlerMiddleware;
    