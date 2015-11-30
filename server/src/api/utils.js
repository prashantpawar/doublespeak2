module.exports = function(app) {
  "use strict";

  function validateRequest(request,schema) {
    let schemaObject = require(schema);
    let validatorResult = app.schemaValidator.validate(request,schemaObject);
    if(validatorResult.errors.length > 0) {
      let error = app.error.format('ValidationError',validatorResult.errors);
      return error;
    }
    else {
      return ;
    }
  }
  return {
    validateRequest: validateRequest
  };




};
