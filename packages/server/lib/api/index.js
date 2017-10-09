const expose = require('./expose');

const apiFactory = app => {
  return {
    expose: expose(app),
  }
};

module.exports = apiFactory;
