var config = require('../config/config');
var allProducts = require(config.ROOT + "/fixtures/products.json").data;
var utility = require('./utility');

function init(req, res, next) {
  res.locals.allProducts = allProducts;
  next();
}

function setLanguage(req, res, next) {
  res.locals.language = req.params.language;
  next();
}


function setQuery(req, res, next) {
  res.locals.offset = parseInt(req.query.offset) || 0;
  res.locals.limit = parseInt(req.query.limit) || 60;
  res.locals.sort = req.query.sort;
  res.locals.brandId = req.query.brand;
  res.locals.categories = req.query.cat;
  res.locals.colorId = req.query.color || '';
  next();
}

function processProducts(req, res, next) {
  if (res.locals.sort) {
    res.locals.sortedAllProducts = utility.sortBy(res.locals.allProducts, res.locals.sort);
    res.locals.allProducts = res.locals.sortedAllProducts;
  }
  if (res.locals.categories) {
    res.locals.allProducts = utility.getAllCategoriesProducts(res.locals.allProducts, res.locals.categories);
    res.locals.allDesigners = utility.getDesigners(res.locals.allProducts);
  }else {
    res.locals.allProducts = res.locals.allProducts;
    res.locals.allDesigners = utility.getDesigners(res.locals.allProducts);
  }

  if (res.locals.brandId) {
    var brandArray = res.locals.brandId.split(',');
    var brandProducts = utility.getAllBrandsProducts(res.locals.allProducts, brandArray);
    res.locals.allProducts = brandProducts;
    res.locals.allColors = utility.getColors(res.locals.allProducts);
  }else {
    res.locals.allProducts =res.locals.allProducts;
    res.locals.allColors = utility.getColors(res.locals.allProducts);
  }
  if (res.locals.colorId) {
    var colorArray = res.locals.colorId.split(',');
    var colorProducts = utility.getAllProductsColor(res.locals.allProducts, colorArray);
    res.locals.allProducts = colorProducts;
  }
  next();
}

module.exports = {
  init: init,
  setQuery: setQuery,
  setLanguage: setLanguage,
  processProducts: processProducts
};
