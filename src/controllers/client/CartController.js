import accountModel from '../../models/accountModel';

import classificationorderModel from '../../models/classificationorderModel';
var listCart = (req, res) => {
    Promise.all([
            classificationorderModel.cartWIdUser(req.cookies.user),
            accountModel.accountWId(req.cookies.user),
        ])
        .then(([cartWIdUser, accountWId]) => {
            res.render('client/cart', {
                listCart: cartWIdUser,
                account: accountWId,
            })
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}
var destroyCart = (req, res) => {
    classificationorderModel.deleteWId(req.params.id, req.cookies.user);
    setTimeout(() => {
        res.redirect('/cart');
    }, 1000);
}
module.exports = {
    listCart,
    destroyCart
}