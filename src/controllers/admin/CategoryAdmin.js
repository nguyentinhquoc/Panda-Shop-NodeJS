import Category from "../../models/categoriesModel";
var editNameCategory = (req, res) => {
    Category.editName(req.params.id, req.body.NameNew)
    setTimeout(() => {
        res.redirect(req.headers.referer || '/fallback-route');
    }, 100);
}
var listCategory = (req, res) => {
    Category.categoriesAdmin()
        .then((listCategories) => {
            res.render('admin/list_category', {
                listCategories
            });
        }).catch((err) => {});
}
var changeStatus = (req, res) => {
    Category.changeStatus(req.params.id);
    setTimeout(() => {
        res.redirect(req.headers.referer || '/fallback-route');
    }, 100);
}
var addCategory = (req, res) => {

    Category.addCategories(req.body.NameNewAdd, req.body.statusCategoryNew)
    setTimeout(() => {
        res.redirect(req.headers.referer || '/fallback-route');
    }, 100);
}
module.exports = {
    listCategory,
    changeStatus,
    editNameCategory,
    addCategory
}