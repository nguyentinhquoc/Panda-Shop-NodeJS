import variantsModel from '../../models/variantsModel';
import productsModel from '../../models/productsModel';
import categoriesModel from '../../models/categoriesModel';
import uploadImg from '../../configs/uploadImages';
const multer = require('multer');
var upload = uploadImg.uploadProduct;

var addProduct = (req, res) => {
    Promise.all([
            variantsModel.listColors(),
            variantsModel.listSizes(),
            categoriesModel.categories(),
        ])
        .then(([listColors, listSizes, categories]) => {
            res.render('admin/add_product', {
                listColors: listColors,
                listSizes: listSizes,
                categories: categories,
            })
            // res.send(123)
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}
var listProducts = (req, res) => {
    var id = req.params.id
    Promise.all([
            productsModel.listProductsAdmin(id),
            categoriesModel.Countcategories()
        ])
        .then(([listProduct, Countcategories]) => {
            res.render('admin/list_product', {
                listProduct: listProduct,
                Countcategories: Countcategories,
            })
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}
var editProducts = (req, res) => {
    Promise.all([
            variantsModel.VariantsWIdProduct(req.params.id),
            productsModel.productWhereId(req.params.id),
            variantsModel.listColors(),
            variantsModel.listSizes(),
            categoriesModel.categories(),
        ])
        .then(([variants, valueProduct, listColors, listSizes, categories]) => {
            res.render('admin/edit_product', {
                variants: variants,
                valueProduct: valueProduct,
                listColors: listColors,
                listSizes: listSizes,
                categories: categories,
            })
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}

var subAddProduct = async (req, res) => {
    if (req.query.status == 'du') {

        /* ------------------------------- upload ảnh ------------------------------- */
        Promise.all([
            variantsModel.listColors(),
            variantsModel.listSizes()
        ]).then(([colors, sizes]) => {
            var mang = [{
                name: 'ImageProduct',
                maxCount: 1
            }]
            sizes.forEach(value1 => {
                colors.forEach(value2 => {
                    mang.push({
                        name: 'img_' + value2.id + '_' + value1.id,
                        maxCount: 1
                    })
                });
            });
            upload.fields(mang)(req, res, function (err) {
                if (err) {
                    console.error('Lỗi upload:', err);
                    return res.status(400).json({
                        error: err.message
                    });
                }
                console.log(req.body);
                var name_product = req.body.NameProduct
                var price_product = req.body.PriceProduct
                var price_sale = req.body.PriceSaleProduct
                var image_product = req.files.ImageProduct[0].filename
                var image_variant = req.files;
                delete image_variant.ImageProduct;
                var description_product = req.body.DescriptionProduct
                var id_category = req.body.CategoryProduct
                var code_product = Date.now();
                var code_products = code_product;
                productsModel.addProduct(name_product, price_product, price_sale, image_product, description_product, id_category, code_products)
                setTimeout(() => {
                    productsModel.productWhereCode(code_products).then(productId => {
                        Promise.all([
                            variantsModel.listColors(),
                            variantsModel.listSizes()
                        ]).then(([colors, sizes]) => {
                            sizes.forEach(value1 => {
                                colors.forEach(value2 => {
                                    var code_variant = value2.id + '_' + value1.id;
                                    var id_color = value2.id;
                                    var id_size = value1.id;
                                    var quantity_variant = req.body[code_variant];
                                    var codeImg = 'img_' + value2.id + '_' + value1.id;
                                    if (req.files[codeImg] != undefined) {
                                        var image_variant_value = req.files[codeImg][0].filename;
                                    } else {
                                        var image_variant_value = null;
                                    }
                                    setTimeout(() => {
                                        variantsModel.addVariants(productId, id_color, id_size, quantity_variant, code_variant, image_variant_value);
                                    }, 1000);
                                });
                            });
                        }).catch(err => {
                            console.error('Error:', err);
                        });
                    }).catch(error => {
                        console.error('Error:', error);
                    });
                }, 100);
                setTimeout(() => {
                    res.redirect('/admin/list-product/all-product');
                }, 100);
            })
        }).catch(err => {
            console.error('Error:', err);
        });
    } else if (req.query.status == 'thieu') {
        var mang = [{
            name: 'ImageProduct',
            maxCount: 1
        }]
        mang.push({
            name: 'image[]',
            maxCount: 10
        })
        upload.fields(mang)(req, res, function (err) {
            if (err) {
                console.error('Lỗi upload:', err);
                return res.status(400).json({
                    error: err.message
                });
            }
            var name_product = req.body.NameProduct
            var price_product = req.body.PriceProduct
            var price_sale = req.body.PriceSaleProduct
            var image_product = req.files.ImageProduct[0].filename
            var image_variant = req.files;
            delete image_variant.ImageProduct;
            var description_product = req.body.DescriptionProduct
            var id_category = req.body.CategoryProduct
            //     /* ----------------------------------- --- ---------------------------------- */
            var code_product = Date.now();
            var code_products = code_product;
            productsModel.addProduct(name_product, price_product, price_sale, image_product, description_product, id_category, code_products)
            setTimeout(() => {
                productsModel.productWhereCode(code_products).then(productId => {
                    for (let index = 0; index < req.body.quantity.length; index++) {
                        var id_color = req.body.color[index];
                        var id_size = req.body.size[index]
                        var quantity_variant = req.body.quantity[index];
                        var code_variant = id_color + '_' + id_size;
                        if (req.files && req.files['image[]'] && Array.isArray(req.files['image[]']) && req.files['image[]'][index]) {
                            var image_variant_value = req.files['image[]'][index].filename;
                        } else {
                            var image_variant_value = null;
                        }
                        variantsModel.addVariants(productId, id_color, id_size, quantity_variant, code_variant, image_variant_value);
                    }
                })
            }, 100);
            setTimeout(() => {
                res.redirect('/admin/list-product/all-product');
            }, 100);
        })
    }
}
var subEditProducts = (req, res) => {
    Promise.all([
            variantsModel.VariantsWIdProduct(req.params.id),
            productsModel.productWhereId(req.params.id),
            variantsModel.listColors(),
            variantsModel.listSizes(),
            categoriesModel.categories(),
        ])
        .then(([variants, valueProduct, listColors, listSizes, categories]) => {
            var mang = [{
                name: 'ImageProduct',
                maxCount: 1
            }]
            variants.forEach(value => {
                mang.push({
                    name: value.id,
                    maxCount: 1
                })
            })
            mang.push({
                name: 'image[]',
                maxCount: 10
            })
            upload.fields(mang)(req, res, function (err) {
                console.log(req.body);
                console.log('00000');
                console.log(req.files);

                if (req.files['ImageProduct']) {
                    console.log(req.files['ImageProduct'].filename + '1111');
                    var image_product = req.files['ImageProduct'][0].filename;
                } else {
                    var image_product = req.body.ImageOld;
                }
                var productId = req.body.productId;
                var name_product = req.body.NameProduct;
                var price_product = req.body.PriceProduct;
                var price_sale = req.body.PriceSaleProduct;
                var description_product = req.body.DescriptionProduct;
                var id_category = req.body.CategoryProduct;
                productsModel.editProducts(productId, name_product, price_product, price_sale, image_product, description_product, id_category);
                for (let index = 0; index < req.body.idVariant.length; index++) {
                    setTimeout(() => {
                        var id_Variant = req.body.idVariant[index]
                        var quantity_variant = req.body.quantity[index]
                        if (req.files[id_Variant]) {
                            var image_variant = req.files[id_Variant][0].filename;
                        } else {
                            var image_variant = false
                        }
                        variantsModel.editVariants(id_Variant, quantity_variant, image_variant)
                    }, 100);
                }
                var viTri = 0
                for (let index = req.body.idVariant.length; index < req.body.quantity.length; index++) {
                    var id_color = req.body.color[viTri];
                    var id_size = req.body.size[viTri]
                    var quantity_variant = req.body.quantity[index];
                    var code_variant = id_color + '_' + id_size;
                    if (req.files && req.files['image[]'] && Array.isArray(req.files['image[]']) && req.files['image[]'][viTri]) {
                        var image_variant_value = req.files['image[]'][viTri].filename;
                    } else {
                        var image_variant_value = null;
                    }
                    console.log('code_variant');
                    console.log(code_variant);
                    console.log('id_color');
                    console.log(id_color);
                    console.log('id_size');
                    console.log(id_size);
                    console.log('image_variant_value');
                    console.log(image_variant_value);
                    console.log('quantity_variant');
                    console.log(quantity_variant);
                    variantsModel.addVariants(productId, id_color, id_size, quantity_variant, code_variant, image_variant_value);
                    viTri++;
                }
            })
            setTimeout(() => {
                res.redirect(req.headers.referer || '/fallback-route');
            }, 100);
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}

var changeStatus = (req, res) => {
    productsModel.changeStatus(req.params.id);
    setTimeout(() => {
        res.redirect(req.headers.referer || '/fallback-route');
    }, 100);
}
module.exports = {
    changeStatus,
    editProducts,
    subEditProducts,
    addProduct,
    subAddProduct,
    listProducts
}