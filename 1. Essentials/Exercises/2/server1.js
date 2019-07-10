const http = require('http');
const utils = require('../common/utils');

console.log('Server is starting...')

http.Server((req, res) => {
    console.log('Incoming request');
    utils.sleep(2000);
    res.writeHead(200);
    res.end();
}).listen(8000);

console.log('Server is running');