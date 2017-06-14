var config = require('../config/config');
var middleware = require('../middleware/middleware');
var controller = require('../controller/listing');

// Mock API using fixture so we're not dependent on network connectivity
var allProducts = require(config.ROOT + '/fixtures/products.json').data;
var routes = {
    init: function (app) {
        app.get("/api/:language/shop",
          middleware.setLanguage,
          middleware.init,
          middleware.setQuery,
          middleware.processProducts,
          controller.render
        );
    }
};



module.exports = {
    routes: routes
};
