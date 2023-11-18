const Gun = require('gun');
const http = require('http');

const server = http.createServer().listen(8764);
const gun = Gun({ web: server });

console.log('Gun server is running on port 8765');
