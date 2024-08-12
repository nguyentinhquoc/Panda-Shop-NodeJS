import accountModel from '../src/models/accountModel';
module.exports = {
    isAdmin: (req, res, next) => {
        accountModel.accountWId(req.cookies.user)
            .then((result) => {
                if (result.role_account == 2) {
                    return next();
                }
                return res.redirect('/404');
            }).catch((err) => {

            });



    },

    isUser: (req, res, next) => {
        if (req.user && req.user.role_account === 1) {
            return next();
        }
        return res.redirect('/404');
    }
};