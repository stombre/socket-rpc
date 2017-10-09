const expose = app => {
  app.rpc = {};

  return (functionName, ...functionHandler) => {

    // Create middleware stack :
    const functionWords = functionName.split('.');
    let functionIndex = 1;
    let middlewareStack = app.middlewares;
    let functionsStack = middlewareStack['*'] ? middlewareStack['*'] : [];

    while(functionIndex < functionWords.length && middlewareStack[functionWords[functionIndex]]) {

      middlewareStack = middlewareStack[functionWords[functionIndex++]];

      if(middlewareStack['*']) {
        functionsStack = functionsStack.concat(middlewareStack['*']._handler);
      }
      functionsStack = functionsStack.concat(middlewareStack._handler);
    }

    functionsStack = functionsStack.concat(functionHandler);

    const finalHandler = async params => {

      const nextFactory = index => {
        return async () => {
          if(index > functionsStack.length) {
            return null;
          } else {
            params.next = nextFactory(index + 1);
            return await functionsStack[index++](params);
          }
        };
      };

      params.next = nextFactory(0);

      return await functionsStack[0](params);
    };

    app.rpc[functionName] = finalHandler;
  };
};

module.exports = expose;
