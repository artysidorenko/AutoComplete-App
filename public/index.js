(function() {

  var searchTextClient = function(callback) {
    var searchBox = document.getElementById('search-box');
    var xhr = new XMLHttpRequest();
    var url = '/searchText';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var responseObj = JSON.parse(xhr.responseText);
        callback(responseObj);
      }
    }
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'text/plain');
    xhr.send(searchBox.value);
  };

  var appendResults = function(results) {
    var suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = "";
    for (var i in results) {
      var listItem = document.createElement('li');
      const listWord = results[i];
      listItem.textContent = results[i];
      listItem.addEventListener('click', function() {
        selectWord(listWord);
      });
      suggestions.appendChild(listItem);
    }
  };

  var selectWord = function(word) {
    var searchBox = document.getElementById('search-box');
    searchBox.value = word;
  }

  window.onload = function(){
    var searchBox = document.getElementById('search-box');
    searchBox.addEventListener('keyup', function()  {
      searchTextClient(appendResults);
    });
  };

  module.exports = {searchTextClient, appendResults};

})();
