const getHandlers = require('./get_handlers');
const postHandlers = require('./post_handlers');
const routes = {};

routes.route = function(req, res)  {

  console.log('URL: ' + req.url + ' ; METHOD: ' + req.method);

  switch (req.url) {
    case '/':
      getHandlers.home(req, res);
      break;
    case '/styles.css' :
      getHandlers.style(req, res);
      break;
    case '/index.js'  :
      getHandlers.script(req, res);
      break;
    case '/words'  :
      getHandlers.words(req, res);
      break;
    case '/searchText' :
      postHandlers.searchText(req, res);
      break;
    default:
      getHandlers.unknown(req,res);

  }

}


module.exports = routes;
