const http = require('http');
const url = 'http://localhost:8000/';

function makeAsyncRequests(url, numberOfRequests){
    for (let index = 0; index < numberOfRequests; index++) {
        http.get(url, res => {
            res.on('data', (chunk) => {
                console.log('Recieved chunk: ' + chunk);
            });

            res.on('end', () => {
                console.log(`Request ${index} finished.`);
            });
        });
    }
}

makeAsyncRequests(url, 10);