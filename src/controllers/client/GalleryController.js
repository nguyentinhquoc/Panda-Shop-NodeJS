import galleryModel from '../../models/galleryModel';

var gallery = (req, res) => {
    galleryModel.listGallery()
        .then((listGallery) => {
            res.render('client/gallery', {
                listGallery
            })
        }).catch((err) => {});
}
module.exports = {
    gallery
}