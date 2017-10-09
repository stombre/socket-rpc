let callCounter = 0;

const callFactory = app => {
  app.callBack = {};
  app.socket.onmessage(message => {
    const { callId, result } = message;

    app.callBack[callId].resolve(result);
  });

  app.call = (method, params) => {
    const data = {
      method,
      params,
      type: 'CALL',
      callId: callCounter++,
    };

    const resultHandler = new Promise((resolve, reject) => {
      app.callBack[data.callId] = {
        resolve,
        reject,
      };
    });

    app.socket.send(data);

    return resultHandler;
  };

  return app;
};

export default callFactory;
