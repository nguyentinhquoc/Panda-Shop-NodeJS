import productsModel from '../../models/productsModel';
import categoriesModel from '../../models/categoriesModel';

const url = require('url');
var listProducts = (req, res) => {
    var linkYesPage = req.originalUrl;
    console.log(linkYesPage);
    const parsedUrl = url.parse(linkYesPage, true);
    var search = ''
    if (req.body.searchProduct) {
        var search = req.body.searchProduct
    }
    var name = req.params.name
    var linkNoPage = '/shop/' + req.params.name;
    var page = req.params.page
    page = parseInt(page);
    Promise.all([
            search,
            page,
            linkNoPage,
            productsModel.top10New(),
            productsModel.countProduct(search, name),
            productsModel.listProducts(search, name, page),
            categoriesModel.categories(),
        ])
        .then(([search, page, linkNoPage, top10New, countProduct, listProducts, categories]) => {
            res.render('client/shop', {
                searchProduct: search,
                page,
                linkNoPage,
                top10New: top10New,
                countProduct: countProduct,
                listProducts: listProducts,
                categories: categories,
            })
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}
module.exports = {
    listProducts
}