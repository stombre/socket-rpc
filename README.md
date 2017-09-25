# socket-rpc
Project to a server-client based on RPC / Event architecture with websocket

Temporary name


# API
## Server

```
const server = require('')({ port: 9000 });

server.rpc.on('users.getOne')
    .use(myMiddleware)
    .use(myMiddleware);

```

## Client
