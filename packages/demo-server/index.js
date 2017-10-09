const ilrt = require('ilrt-server')({ port: 9090 });

ilrt.expose('console.log', () => {
  console.log('hello world server !');

  return 'hello world client';
});


