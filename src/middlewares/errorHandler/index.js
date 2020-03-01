module.exports = function(err, req, res, next) {
  let errorContent = {
    status_code: err.statusCode || 500,
    message: err.message || "Internal Server Error",
    errorContext: err.errorContext || {}
  };

  switch (err.name) {
    case "ValidationError":
      errorContent.message = "Validation Error";
      res.status(400).json(errorContent);
      break;

    default:
      res.status(500).json(errorContent);
      break;
  }
};
