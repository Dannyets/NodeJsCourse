const server = require('./server1');
const client = require('./client');

const port = 8000;
const url = `http://localhost:${port}`;

server.init(port);

client.makeAsyncRequests(url, 10);