const express = require('express');
const http = require('http');
const Gun = require('gun');

const app = express();
const server = http.createServer(app);

// Gun setup
const gun = new Gun({ web: server });

// Middleware to handle Gun requests
app.use(gun.server);

// Serve static files (e.g., your HTML, CSS, and JS)
app.use(express.static('public'));

const port = process.env.PORT || 8765;

server.listen(port, () => {
  console.log(`Gun server is running on port ${port}`);
});

// Keep the application alive by sending a dummy request every 5 minutes
setInterval(() => {
  http.get('http://dechat.onrender.com');
}, 300000); // 5 minutes
