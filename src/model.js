const fs = require('fs');


var model = {};

model.filename = __dirname + '/words.txt';

model.words = [];

model.import = function(successCallback) {
  fs.readFile(model.filename, 'utf8', function (err, data)  {
    if (err)  {console.log(err);}
    model.words = data.split('\n');
    successCallback(); //usually this should redirect to stringSearch function (unless running a unit test)
  });
};

model.stringSearch = function(string, list) {
  var results = [];
  var regex = new RegExp("^" + string, "i");
  for (var i=0; i<list.length; i++) {
    if (list[i].match(regex)) {
      results.push(list[i]);
    }
  }
  return results;
};

module.exports = model;
