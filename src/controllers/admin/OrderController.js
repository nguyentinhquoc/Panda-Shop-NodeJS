import orderModel from '../../models/orderModel';
import variantsModel from '../../models/variantsModel';
import classificationorderModel from '../../models/classificationorderModel';

var allOrdersad = (req, res) => {
    Promise.all([
            orderModel.orderWStatus(0, req.params.iduser),
            orderModel.orderWStatus(3, req.params.iduser),
            orderModel.orderWStatus(4, req.params.iduser),
            orderModel.orderWStatus(5, req.params.iduser),
            orderModel.orderWStatus(7, req.params.iduser),
            orderModel.orderWStatus(6, req.params.iduser),
        ])
        .then(([all, order3, order4, order5, order7, order6]) => {
            res.render('admin/list_order', {
                all,
                order3,
                order4,
                order5,
                order7,
                order6
            })
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}
var detailOrderAd = (req, res) => {
    Promise.all([
            classificationorderModel.orderWCode(req.params.code_order),
            orderModel.orderWCode(req.params.code_order)
        ])
        .then(([product, order]) => {
            res.render('admin/detail_order', {
                product: product,
                order
            })
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}
var updateStatus = (req, res) => {
    var code_status = parseInt(req.params.status) + 1;
    if (code_status == 5) {
        classificationorderModel.ClassificationOrderWCodeOrder(req.params.code_order)
            .then((value) => {
                value.forEach(element => {
                    variantsModel.changeSalesAndQuantity(element.id_variants, element.quantity)
                });

            })
    }
    orderModel.updateStatusOrder(req.params.code_order, code_status);
    classificationorderModel.updateStatusCl(req.params.code_order, code_status);
    res.redirect(req.headers.referer || '/fallback-route');

}
module.exports = {
    allOrdersad,
    detailOrderAd,
    updateStatus
}