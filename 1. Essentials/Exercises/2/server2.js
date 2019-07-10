const cluster = require('cluster');
const http = require('http');
const utils = require('../common/utils');
const port = 8000;

console.log('Creating cluster');
let numRequsts = 0;

if(cluster.isMaster){
    console.log('Creating master.');

    setInterval(() => {
        console.log(`Number of requests: ${numRequsts}`);
    }, 1000);

    createWorkers(cluster, 4);
    
    console.log('[Master] created 4 workers.')

    registerWorkerListener(messageHandler);
} else {
    startServer(port)
}

function startServer(port){
    http.Server((req, res) => {
        console.log(`[Worker ${process.env.workerId}] request: ${req.url}`);
        utils.sleep(2000);
        
        res.writeHead(200);
        res.end(process.env.workerId);

        //Notfiy server about the request
        process.send({ cmd: 'notifyRequest' });
    }).listen(port);
}

function createWorkers(numberOfWorkers){
    for (let index = 0; index < numberOfWorkers; index++) {
        cluster.fork({ workerId: index });
    }
}

function registerWorkerListener(onMessageReceivedCallback){
    for (const id in cluster.workers) {
        cluster.workers[id].on('message', onMessageReceivedCallback);
    }
}

function messageHandler(msg){
    if(msg.cmd && msg.cmd === 'notifyRequest'){
        numRequsts += 1;
        console.log(`Number of requests: ${numRequsts}`);
    }
}