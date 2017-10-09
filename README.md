# ILRT : I Love Real Time
Project to provide a powerful real time API based on web socket.

Temporary name

### Example :
Basic example of a server :

```
const server = require('')({ port: 9000 });

server.use('users.*', aGlobalMiddleware);

server.expose('users.getOne', aMiddleware, usersGetOne);

```

A client :

```
import client from '';

const current = client.connect('');

const user = await current.call('users.getOne', { id: 333 });

```



# API
## Server

### API
* serverFactory({ port }) : Create a websocket on the target port. Return a server instance
* server.use(path, middleware0[, middleware1...]) : Mount middleware on a specific path
* server.expose(method, [middleware0, ...,] handler) : Mount a handler on the specific route

## Client
* clientFactory({ path }) : Connect the specific websocket. Return a client instance.
* client.call(method, params) : Call the specific RPC method
