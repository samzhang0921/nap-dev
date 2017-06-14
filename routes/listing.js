var ReactDOMServer = require('react-dom/server');
// var app = require('../app/components/index.js');

var routes = {
    init: function (app) {
        app.get("/listing",
        function(req, res, next){
          // var contentString = ReactDOMServer.renderTostring(app);
          // console.log(contentString);
          res.render('listing', {
            content: ''
          });
        }
        );
    }
};



module.exports = {
    routes: routes
};
