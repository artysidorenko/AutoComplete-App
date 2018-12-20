const client = require('../public/index.js');
//Need to require XMLHttpRequest as is not part of node
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
//Need to manually implement getJasmineRequireObj function (not working properly)
const JasmineCore = require("jasmine-core");
global.getJasmineRequireObj = function() {
    return JasmineCore;
};
require("jasmine-ajax");


describe('index.js XHR testing: ', function() {
  beforeEach(function() {
    jasmine.Ajax.install();
  });
  afterEach(function()  {
    jasmine.Ajax.uninstall();
  });
  it("request sends a text snippet", function() {
    var onDone = jasmine.createSpy("success");
    var testInput = "xyr";
    client.searchTextClient(testInput, onDone);
    expect(onDone).toHaveBeenCalled();
  });

});
