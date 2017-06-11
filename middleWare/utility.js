var _ = require('lodash');

function finalPrice(product) {
  return product.price.gross / product.price.divisor;
}

function getDesigners(products) {
  var designers = [];
  for (var i = 0; i < products.length; i++) {
    if (_.findIndex(designers, products[i].brand) === -1) {
      designers.push(products[i].brand);
    }
  }
  var sortDesigners = designers.sort(function(a, b) {
    var nameA = a.name.en.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.en.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return designers;
}

function sortBy(products, sortOrder) {
  switch (sortOrder) {
    case 'high':
      products.sort(function(productA, productB) {
        return productA.price.gross < productB.price.gross ? 1 : -1;
      });
      return products;
    case 'low':
      products.sort(function(productA, productB) {
        return productA.price.gross > productB.price.gross ? 1 : -1;
      });
      return products;
    default:
      return products;
  }
}

function getBrandProducts(products, brandID) {
  return products.filter(function(product) {
    return product.brand.id == brandID;
  });
}

function getAllBrandsProducts(products, brandArray) {
  var brandProducts = [];
  for (var i = 0; i < brandArray.length; i++) {
    brandProducts = brandProducts.concat(getBrandProducts(products, brandArray[i]));
  }

  return brandProducts;
}

function getProductsColor(products, colorId) {
  return products.filter(function(product) {
    for (var i = 0; i < product.colourIds.length; i++) {
      if (product.colourIds[i] == colorId) {
        return true;
      }
    }
    return false;
  });
}

function getAllProductsColor(products, colorArray) {
  var colorProducts = [];
  for (var i = 0; i < colorArray.length; i++) {
    colorProducts = colorProducts.concat(getProductsColor(products, colorArray[i]));
  }
  return colorProducts;
}

function getAllCategoriesProducts(products, categories) {
  return products.filter(function(product) {
    if (categories == product.categories[0].children[0].id) {
      return true;
    }
    return false;
  });
}

module.exports = {
  finalPrice: finalPrice,
  sortBy: sortBy,
  getDesigners: getDesigners,
  getBrandProducts: getBrandProducts,
  getAllBrandsProducts: getAllBrandsProducts,
  getProductsColor: getProductsColor,
  getAllProductsColor: getAllProductsColor,
  getAllCategoriesProducts: getAllCategoriesProducts
};
