const errorMessages = {
    200: 'Success',
    400: 'All fields are required',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
  };

  module.exports.getMessage = function (errorCode) {
    return { message: errorMessages[errorCode] || 'Unknown error' }
  };