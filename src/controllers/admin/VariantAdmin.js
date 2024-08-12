import variantsModel from "../../models/variantsModel";
var listVariant = (req, res) => {
    Promise.all([
        variantsModel.listColors(),
        variantsModel.listSizes()
    ]).then(([listColors, listSizes]) => {
        res.render('admin/list_variant', {
            listColors,
            listSizes
        })
    }).catch((err) => {});
}
var addSize = (req, res) => {
    variantsModel.addSize(parseInt(req.body.NameNewAdd))
    setTimeout(() => {
        res.redirect(req.headers.referer || '/fallback-route');
    }, 100);
}
var addColor = (req, res) => {
    variantsModel.addColor(req.body.NameNewAdd)
    setTimeout(() => {
        res.redirect(req.headers.referer || '/fallback-route');
    }, 100);
}
module.exports = {
    listVariant,
    addSize,
    addColor,
}