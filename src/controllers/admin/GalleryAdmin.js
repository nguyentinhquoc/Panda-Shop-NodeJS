import galleryModel from "../../models/galleryModel";
import productsModel from "../../models/productsModel";
import uploadImg from '../../configs/uploadImages';

const multer = require('multer');

var upload = uploadImg.uploadProduct;

var deleteGallery = (req, res) => {
    galleryModel.deleteGallery(req.body.id)
        .then((gallery) => {
            res.redirect('/admin/gallery');
        }).catch((err) => {});
}
var listGallery = (req, res) => {
    galleryModel.listGallery()
        .then((listGallery) => {
            res.render('admin/list_gallery', {
                listGallery
            });
        }).catch((err) => {});
}
var addGalleryP = (req, res) => {
    upload.single('ImageGallery')(req, res, function (err) {
        var Product = req.body.Product
        var NameGallery = req.body.NameGallery
        var image = req.file.filename
        galleryModel.addGallery(Product, NameGallery, image)
        setTimeout(() => {
            res.redirect('/admin/gallery');
        }, 100);
    })

}
var addGallery = (req, res) => {
    productsModel.listProductsAdmin('all-product')
        .then((productList) => {
            res.render('admin/add_gallery', {
                productList
            });
        }).catch((err) => {});
}

var editGalleryP = (req, res) => {
    upload.single('ImageGallery')(req, res, function (err) {
        var Product = req.body.Product
        var NameGallery = req.body.NameGallery
        if (req.file) {
            var image = req.file.filename
        } else {
            var image = false

        }
        var idGallery = req.params.id
        galleryModel.editGalleryP(Product, NameGallery, image, idGallery)
        setTimeout(() => {
            res.redirect('/admin/gallery');
        }, 100);
    })
}
var editGallery = (req, res) => {

    Promise.all([
            galleryModel.editGallery(req.params.id),
            productsModel.listProductsAdmin('all-product')
        ])
        .then(([valueGallery, productList]) => {
            res.render('admin/edit_gallery', {
                valueGallery,
                productList,
            });
        }).catch((err) => {
            console.log(err);
        });
}
module.exports = {
    listGallery,
    editGallery,
    editGalleryP,
    deleteGallery,
    addGallery,
    addGalleryP
}