const http = require('http');
const routes = require('./routes.js');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const server = http.createServer(routes.route);

server.listen(port);

console.log('server running on: http://' + host + ':' + port);

module.exports = {
  server: server
}
