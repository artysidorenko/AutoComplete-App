const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const model = require('./model.js');
const handlers = {};

handlers.searchText = function(req, res)  {
  var searchText = "";
  var results = [];
  req.on('error', function(err) {
    console.log(err);
  });
  req.on('data', function(stream) {
    searchText += stream;
  });
  req.on('end', function()  {
    console.log(searchText);
    model.import(function() {
      results = model.stringSearch(searchText, model.words);
      resultsText = JSON.stringify(results);
      res.writeHead(200, {'content-type': 'application/json'})
      res.end(resultsText);
    });
  });
}

module.exports = handlers;
