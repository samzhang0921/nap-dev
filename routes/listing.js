var ReactDOMServer = require('react-dom/server');
import App from '../app/App';
import React from 'react';
import { default as fetchListing } from '../actions';

var routes = {
    init: function (app) {
        app.get("/listing",
        function(req, res, next){
          const url = 'http://127.0.0.1:3000/api/en/shop';
          fetchListing(url).then((listingData) => {
            var contentString = ReactDOMServer.renderToString(<App listingdata={listingData} />);
            res.render('listing', {
              content: contentString
            });
          });
        }
        );
    }
};



module.exports = {
    routes: routes
};
