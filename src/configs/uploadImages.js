import multer from 'multer';

const storageAvatar = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/assets/img/user');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg');
    }
});

const storageProduct = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/assets/img/product');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg');
    }
});
const uploadAvatar = multer({
    storage: storageAvatar
});
const uploadProduct = multer({
    storage: storageProduct
});
module.exports = {
    uploadAvatar,
    uploadProduct
}