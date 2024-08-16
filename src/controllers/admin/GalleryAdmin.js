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

var editGallery = (req, res) => {
    galleryModel.listGallery()
        .then((listGallery) => {
            res.render('admin/edit_gallery', {
                listGallery
            });
        }).catch((err) => {});
}
module.exports = {
    listGallery,
    editGallery,
    deleteGallery,
    addGallery,
    addGalleryP
}