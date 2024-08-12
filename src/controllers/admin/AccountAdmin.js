import accountModel from "../../models/accountModel";
var listAccount = (req, res) => {
    accountModel.accountAllAdmin()
        .then((listAccount) => {
            console.log(listAccount);
            res.render('admin/list_account', {
                listAccount
            });
        }).catch((err) => {});
}
var changeStatus = (req, res) => {
    accountModel.changeStatus(req.params.id);
    setTimeout(() => {
        res.redirect(req.headers.referer || '/fallback-route');
    }, 100);
}
module.exports = {
    listAccount,
    changeStatus
}