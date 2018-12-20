const fs = require('fs');
const path = require('path');
const handlers = {};

handlers.home = function(req, res)  {
  let filename = __dirname + "/../public/index.html";
  fs.readFile(filename, 'utf8', function(err, file) {
    if (err) {
      console.log(err);
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/html'});
      res.end(file);
    }
  });
}

handlers.style = function(req, res) {
  let filename = __dirname + "/../public/styles.css";
  fs.readFile(filename, 'utf8', function(err, file)  {
    if (err)  {
      console.log(err);
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/css'});
      res.end(file);
    }
  });
}

handlers.script = function(req, res) {
  let filename = __dirname + "/../public/index.js";
  fs.readFile(filename, 'utf8', function(err, file)  {
    if (err)  {
      console.log(err);
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/javascript'});
      res.end(file);
    }
  });
}

handlers.words = function(req, res) {
  let filename = __dirname + "/words.txt";
  fs.readFile(filename, 'utf8', function(err, file)  {
    if (err)  {
      console.log(err);
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.end(file);
    }
  });
}

handlers.unknown = function(req, res) {
  res.writeHead(404, {'content-type': 'text/plain'});
  res.end('404 Not Found');
}

module.exports = handlers;
