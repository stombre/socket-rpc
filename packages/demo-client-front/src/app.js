import ilrt from '../../client-front/src/index';

export class App {
  constructor() {
    console.log(ilrt);

    this.client = ilrt('ws://localhost:9090');
    this.message = 'wait';

    console.log(this.client);

    this.client.call('console.log', 'daix')
      .then(message => {
        this.message = message;
      });

  }
}
