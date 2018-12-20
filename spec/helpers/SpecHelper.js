const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const dom = new JSDOM('<html>'+

  '<head>'+
    '<meta charset="utf-8">'+
    '<meta name="viewport" content="width=device-width, initial-scale=1">'+
    '<title>AutoComplete Word Service</title>'+
    '<link href="styles.css" rel="stylesheet">'+
    '<script type="text/javascript" src="./index.js"></script>'+
  '</head>'+

  '<body>'+
    '<div>'+
      '<h1>AutoComplete Service</h1>'+
      '<h2>Instructions: start typing a desired word which will be looked up automatically by the server.</h2>'+
      '<h3>Note: only correct spelling will work with the application.</h3>'+
      '<div action="/searchText" method="post" id="search-div">'+
        '<input type="text" id="search-box" name="search" value="testing">'+
        '<button id="test-submit">Click here to test POST</button>'+
      '</div>'+
      '<a href="/words">Display entire lexicon/dictionary file</a>'+
    '</div>'+
    '<div id="suggestions">'+
    '</div>'+
  '</body>'+

'</html>');
console.log(dom.window.document.querySelector("h1").textContent);

global.window = dom.window;
global.document = dom.window.document;
