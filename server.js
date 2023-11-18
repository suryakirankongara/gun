const http = require('http');
const Gun = require('gun');

const server = http.createServer(Gun.serve).listen(process.env.PORT || 8765);

// Keep the application alive by sending a dummy request every 5 minutes
setInterval(() => {
  http.get('http://gun.onrender.com');
}, 300000); // 5 minutes
