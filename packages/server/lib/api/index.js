/**
 * Created by guillaume on 09/10/2017.
 */

const expose = require('./expose');

const apiFactory = app => {
  return {
    expose: expose(app),
  }
};

module.exports = apiFactory;
