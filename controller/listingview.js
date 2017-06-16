var listing = require('./listing');
function render(req, res){
  res.locals.allProducts = listing.prepareData(res);
//    console.log(res.locals.allProducts);
//    console.log(res.locals.language);
}

module.exports = {
  render: render
};
