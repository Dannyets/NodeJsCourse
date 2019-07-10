const http = require('http');
const utils = require('../common/utils');

function init(port){
    http.Server((req, res) => {
        utils.sleep(2000);
        res.writeHead(200);
        res.end();
    }).listen(port)
}

module.exports.init = init;