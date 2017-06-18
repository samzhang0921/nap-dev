var middleware = require('../middleware/middleware');
var config = require('../config/config');
var utility = require('../middleware/utility');

var listing = {
  prepareData: function(res) {
    var sliceProducts = res.locals.allProducts.slice(res.locals.offset, res.locals.offset + res.locals.limit);

    var total = res.locals.allProducts.length;

    if (res.locals.offset > total) {
        return res.type('json').sendStatus(400);
        //                if the offset more than total return 400 Bad requestw
    }

    return {
        offset: res.locals.offset,
        limit: res.locals.limit,
        total: total,
        designers: res.locals.allDesigners,
        products: sliceProducts.map(function (product) {
            return {
                sku: product.id,
                name: product.name[res.locals.language],
                price: '£' + utility.finalPrice(product),
                color: product.colourIds,
                brand_name: product.brand.name.en,
                brand_id: product.brand.id,
                caregories:product.categories,
                image: {
                    outfit: '//cache.net-a-porter.com/images/products/' + product.id + '/' + product.id + '_ou_sl.jpg',
                    pview: '//cache.net-a-porter.com/images/products/' + product.id + '/' + product.id + '_in_sl.jpg'
                }
            };
        })
    };
  },

  render: function(req, res, next){

    var finalProducts = listing.prepareData(res);

    res.json(finalProducts);

  }
};

module.exports = {
  prepareData: listing.prepareData,
  render: listing.render
};
