const expose = require('./expose');
const use = require('./use');

const apiFactory = app => {
  return {
    expose: expose(app),
    use: use(app),
  }
};

module.exports = apiFactory;
