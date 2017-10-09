const use = app => {
  app.middlewares = {};

  return (middlewareName, middlewareHandler) => {
    const prefixList = middlewareName.split('.');
    let current = app.middlewares;

    for (const prefix of prefixList) {
      if(!current[prefix]) {
        current[prefix] = {
          _handler: [],
        };
      }

      current = current[prefix];
    }

    current._handler.push(middlewareHandler);
  };
};

module.exports = use;
