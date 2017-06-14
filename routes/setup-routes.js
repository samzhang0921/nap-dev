var config = require('../config/config');

var configureRoutes = {

    init: function(app) {

        /********* Products List API Routes ***********/
        var productListApiRoute = require(config.ROOT + '/routes/product-list');
        productListApiRoute.routes.init(app);

        /********* Product API Routes ***********/
        var productApiRoute = require(config.ROOT + '/routes/product');
        productApiRoute.routes.init(app);

        /********* Landing Page Routes ***********/
        var landingPageRoute = require(config.ROOT + '/routes/landing-page');
        landingPageRoute.routes.init(app);
        /********* listing Page Routes ***********/
        var listingRoute = require(config.ROOT + '/routes/listing');
      listingRoute.routes.init(app);

    }
};

module.exports = {
    configureRoutes: configureRoutes
};
