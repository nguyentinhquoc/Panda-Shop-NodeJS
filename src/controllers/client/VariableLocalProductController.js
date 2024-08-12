import accountModel from '../../models/accountModel';
import classificationorderModel from '../../models/classificationorderModel';
import categoriesModel from '../../models/categoriesModel';
var VariableLocal = (req, res, next) => {
    if (req.cookies.user) {
        Promise.all([
                accountModel.accountWId(req.cookies.user),
                classificationorderModel.numberInCart(req.cookies.user),
            ])
            .then(([User, numberInCart]) => {
                res.locals.user = User;
                res.locals.numberInCart = numberInCart.dataValues.countCart;
                next();
            })
            .catch((error) => {
                next();
            });
    } else {
        next();
    }
}
var VariableLocalNoUser = (req, res, next) => {
    categoriesModel.categories()
        .then((categories) => {
            res.locals.categories = categories;
            next();
        })
        .catch((error) => {
            next();
        });
}
module.exports = {
    VariableLocal,
    VariableLocalNoUser
}