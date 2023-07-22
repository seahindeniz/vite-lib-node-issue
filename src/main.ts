import { WebSocketServer } from 'ws';

function setup (){
  const server = new WebSocketServer({ port: 5252 });
  
  server.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });

    ws.send('something');
  });

  server.on('close', () => {
    console.log('Server closed, reopening in 2 seconds');
  });

  server.on('error', error => {
    console.log('Server error, reopening in 2 seconds');
    console.log(error);
  });
}

setup();