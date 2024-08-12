import productsModel from '../../models/productsModel';
import variantsModels from '../../models/variantsModel';
import classificationorderModel from '../../models/classificationorderModel';
import reviewModel from '../../models/reviewModel';
var detailProduct = async (req, res) => {

    Promise.all([
            reviewModel.reviewsWIdProduct(req.params.id),
            productsModel.detailProducts(req.params.id),
            variantsModels.VariantsWIdProduct(req.params.id),
            variantsModels.listColors(),
            variantsModels.listSizes(),
        ])
        .then(([reviewsWIdProduct, detailProduct, VariantsWIdProduct, listColors, listSizes]) => {
            res.render('client/detail', {
                review: reviewsWIdProduct,
                detailProduct: detailProduct,
                VariantsWIdProduct: VariantsWIdProduct,
                listColors: listColors,
                listSizes: listSizes,
            })
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}
var addCart = (req, res) => {
    if (!req.cookies.user) {
        req.flash('checkAddCart', 'error');
        res.redirect('/login');
    } else {
        var color = req.body.color;
        var size = req.body.size;
        var quantity = req.body.quantity;
        var id_product = req.params.id;
        if (color && size && quantity) {
            var VariantsWColorSize = variantsModels.VariantsWColorSize(id_product, color, size)
            Promise.all([VariantsWColorSize])
                .then(([VariantsWColorSize]) => {
                    var id_variants = VariantsWColorSize.id;
                    var id_user = req.cookies.user;
                    var quantity = req.body.quantity;
                    var code_status = 2;
                    const result = classificationorderModel.addClassificationorderCheck(id_user, quantity, code_status, id_variants);
                    result.then((result) => {
                        if (result != false) {
                            classificationorderModel.addClassificationorderCheck(id_user, quantity, code_status, id_variants)
                                .then((addClassificationorderCheck) => {
                                    var quantity = parseInt((addClassificationorderCheck[0].quantity)) + parseInt(req.body.quantity)
                                    var id_user = addClassificationorderCheck[0].id_user
                                    var id_variants = addClassificationorderCheck[0].id_variants
                                    console.log(quantity + '===' +
                                        id_user + '===' +
                                        id_variants);
                                    classificationorderModel.updateClassificationorder(id_user, quantity, 2, id_variants)
                                }).catch((err) => {
                                    console.log(err);

                                });
                        } else {
                            classificationorderModel.addClassificationorder(id_user, quantity, code_status, id_variants);
                        }
                    }).catch((err) => {
                        console.log(err);

                    });


                })
                .catch((error) => {
                    console.error('ERROR:', error);
                });
            req.flash('checkAddCart', 'success');
            setTimeout(() => {
                res.redirect('/detail-product/' + id_product);
            }, 100);
        } else {
            res.redirect(req.originalUrl);
        }
    }
}
module.exports = {
    detailProduct,
    addCart
}