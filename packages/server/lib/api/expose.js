/**
 * Created by guillaume on 09/10/2017.
 */

const expose = app => {
  app.rpc = {};

  return (functionName, functionHandler) => {
    app.rpc[functionName] = functionHandler;
  };
};

module.exports = expose;
