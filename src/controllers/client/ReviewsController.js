import classificationorderModel from '../../models/classificationorderModel';
import orderModel from '../../models/orderModel';
import reviewModel from '../../models/reviewModel';


var reviews = (req, res) => {

    Promise.all([
            classificationorderModel.orderWCode(req.params.code_order),
            classificationorderModel.checkStatus(req.params.code_order),
            orderModel.orderWCode(req.params.code_order),
        ])
        .then(([orderWCode, checkStatus, detail]) => {
            if (checkStatus.code_status == 5 && checkStatus) {
                res.render('client/reviews', {
                    orderWCode: orderWCode,
                    checkStatus: checkStatus,
                    detail: detail,
                })
            } else {
                res.redirect('/orders');
            }
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}
var reviewsPost = (req, res) => {
    var code_order = req.params.code_order;
    var id_user = req.body.id_user;
    var orderWCode = classificationorderModel.ClassificationOrderWCodeOrder(code_order)
    orderWCode.then(orderWCode => {
        orderWCode.forEach(element => {
            var id_variants = element.id_variants
            var content = req.body.content_review[element.id_variants];
            var rating = req.body.star[element.id_variants];
            reviewModel.addReview(id_user, id_variants, content, rating);
            classificationorderModel.updateStatusCl(code_order, 7);
            orderModel.updateStatusOrder(code_order, 7);
            res.redirect('/orders');
        });
    }).catch(error => {
        console.log(error);
    })

    console.log(req.body.content_review[446]);
}
module.exports = {
    reviews,
    reviewsPost,
}