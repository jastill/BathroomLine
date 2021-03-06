// https://github.com/websockets/ws
const WebSocket = require('ws');

// Start a local websocket server
const wss = new WebSocket.Server({ port: 8080 });

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

// Setup the socket once connected
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
  console.log(data);
    // Broadcast to everyone else.
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
  ws.on('error', () => console.log('errored'));
});
