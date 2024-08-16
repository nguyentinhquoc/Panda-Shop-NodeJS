var Er404 = (req, res) => {
    var linkPages = '/';
    if (res.locals.user && res.locals.user.role_account == 2) {
        linkPages = '/admin'
    }
    res.render('client/Er404', {
        linkPages
    })
}
module.exports = {
    Er404
}