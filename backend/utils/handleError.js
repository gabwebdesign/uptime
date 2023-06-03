const handleHttpError = (res, message = "Ops, something is happening", code = 403) => {
    res.status(code);
    res.send({ error: message });
  };
  
  module.exports = { handleHttpError };