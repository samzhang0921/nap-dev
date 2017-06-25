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

function getColors (products) {
  var colors = [];
  var colorList = [];
  // the test didn't provide the colors name, add some colors name
  var colorWithName= [ {
                id:1001,
                name:"Animal print"
            },
            {
                id:2,
                name:"black"
            },
            {
                id:3,
                name:"Blue"
            },
            {
                id:6,
                name:"Brown"
            },{
                id:7,
                name:"Burgundy"
            },
            {
                id:17,
                name:"Gold"
            },{
                id:18,
                name:"Gray"
            },
            {
                id:19,
                name:"Green"
            },{
                id:104,
                name:"Metallic"
            },
            {
                id:1002,
                name:"Neutrals"
            },{
                id:31,
                name:"Orange"
            },
            {
                id:33,
                name:"Pink"
            },{
                id:36,
                name:"Purple"
            },
            {
                id:37,
                name:"Red"
            },
            {
                id:69,
                name:"Silver"
            },
            {
                id:43,
                name:"White"
            },{
                id:44,
                name:"Yellow"
            },{
                id:115,
                name:"Jean Blue"
            }
        ];
  for (var i = 0; i < products.length; i++) {
    if (colors.indexOf(products[i].colourIds[0]) < 0) {
      colors.push(products[i].colourIds[0]);
    }
  }
  for (var j=0;j<colors.length;j++){
            for (var k=0; k<colorWithName.length; k++){
                if (colors[j]==colorWithName[k].id){
                    colorList.push(colorWithName[k]);
                }
            }
        }

  return colorList;
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
  getColors:getColors,
  getDesigners: getDesigners,
  getBrandProducts: getBrandProducts,
  getAllBrandsProducts: getAllBrandsProducts,
  getProductsColor: getProductsColor,
  getAllProductsColor: getAllProductsColor,
  getAllCategoriesProducts: getAllCategoriesProducts
};
