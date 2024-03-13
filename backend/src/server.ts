import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('A new client connected!');

  ws.on('message', function message(data) {
    console.log('received: %s', data);
    ws.send(`Hello, you sent -> ${data}`);
  });

  ws.send('Welcome to the WebSocket server!');
});

console.log('WebSocket server is running on ws://localhost:8080');
