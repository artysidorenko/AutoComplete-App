const model = require('../src/model.js');

describe('model.js import testing: ', function() {
  beforeEach(function(done) {
    model.import(function() {
      done();
    });
  });
  it('should always return an array', function() {
    let words = model.words;
    expect(Array.isArray(words)).toBe(true);
  });
  it("first and last entries should tie back to lexicon", function() {
    let firstWord = model.words[0];
    let lastWord = model.words[model.words.length-2]; //last entry is blank
    expect(firstWord).toBe("A");
    expect(lastWord).toBe("Zyzzogeton");
  });
});


describe('model.js stringSearch testing: ', function() {
  beforeEach(function(done) {
    model.import(function() {
      done();
    });
  });
  it('should always return an array', function() {
    let searchText = "zy";
    let results = model.stringSearch(searchText, model.words);
    expect(Array.isArray(results)).toBe(true);
  });
  it('pattern zymotically should return 1 entry equal to zymotically', function() {
    let searchText = "zymotically";
    let results = model.stringSearch(searchText, model.words);
    expect(results.length).toBe(1);
    expect(results[0]).toBe("zymotically");
  });
  it('pattern ZYR should return 3 entries that reconcile to words.txt', function() {
    let searchText = "zyr";
    let results = model.stringSearch(searchText, model.words);
    expect(results.length).toBe(3);
    expect(results[1]).toBe('Zyrian');
  });
});
