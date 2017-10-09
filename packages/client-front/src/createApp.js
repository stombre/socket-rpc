import { createWebSocket } from 'createWebsocket';
import { callFactory } from 'callFactory';

const createApp = options => {
  const app = {
    socket: createWebSocket(options)
  };

  callFactory(app);

  return app;
};

export { createApp };
