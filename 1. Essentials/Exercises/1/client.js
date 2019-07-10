const http = require('http');

function makeAsyncRequests(url, numberOfRequests){
    for (let index = 0; index < numberOfRequests; index++) {
        http.get(url, res => {
            console.log(`Request ${index} finished.`)
        });
    }

    console.log('All requests completed successfully.')
}

module.exports = {
    makeAsyncRequests
};