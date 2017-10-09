import ilrt from '../../client-front/lib/irtl';

export class App {
  constructor() {
    this.client = ilrt('ws://localhost:9090');
    this.message = 'wait';

    this.client.call('console.log', 'daix')
      .then(message => {
        this.message = message;
      });

  }
}
