import {
    time
} from 'console';
import classificationorderModel from '../../models/classificationorderModel';
import OrderModel from '../../models/orderModel';
const axios = require('axios').default; // npm install axios
var orderDetail = async (req, res) => {
    setTimeout(function () {
        Promise.all([
                classificationorderModel.orderWCode(req.params.code_order),
                OrderModel.orderWCode(req.params.code_order)
            ])
            .then(([product, order]) => {
                res.render('client/order', {
                    product: product,
                    order
                })
            })
            .catch((error) => {
                console.error('ERROR:', error);
            });
    }, 1000);

}
var addPaymentOnline = async (req, res) => {
    var full_name_user = req.query.fullName;
    var id_user = req.cookies.user;
    var tel_user = req.query.phoneNumber;
    var address_user = req.query.address;
    var total = req.query.total;
    var payment_method = 2;
    var code_status = 3;
    var code_oders = req.params.code_order;
    OrderModel.createDetailOrder(id_user, full_name_user, tel_user, address_user, total, payment_method, code_status, code_oders)
    classificationorderModel.updateWId(req.query.id, req.query.quantity, code_oders);
    return res.redirect(`/order/${code_oders}`);
}
var addOrder = async (req, res) => {
    var full_name_user = req.body.fullName;
    var tel_user = req.body.phoneNumber;
    var address_user = req.body.xa + '-' + req.body.huyen + '-' + req.body.tinh;
    var total = req.body.total;
    var payment_method = 1;
    var code_status = 3;
    var id_user = req.cookies.user;
    var code_oders = Date.now();
    if (req.body.payments == 1) {
        console.log(req.body.id);
        classificationorderModel.updateWId(req.body.id, req.body.quantity, code_oders);
        OrderModel.createDetailOrder(id_user, full_name_user, tel_user, address_user, total, payment_method, code_status, code_oders)
        return res.redirect(`/order/${code_oders}`);
    } else {
        if (Array.isArray(req.body.id) && Array.isArray(req.body.quantity)) {
            var id = (req.body.id).map(id => `id[]=${encodeURIComponent(id)}`).join('&')
            var quantity = (req.body.quantity).map(quantity => `quantity[]=${encodeURIComponent(quantity)}`).join('&')
        } else {
            var id = `id[]=${encodeURIComponent(req.body.id)}`
            var quantity = `quantity[]=${encodeURIComponent(req.body.quantity)}`
        }
        const accessKey = 'F8BBA842ECF85';
        const secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
        const orderInfo = 'PandaShop';
        const partnerCode = 'MOMO';
        const redirectUrl = `http://localhost:3000/payment_online/${code_oders}?fullName=${full_name_user}&phoneNumber=${tel_user}&address=${address_user}&${id}&${quantity}&total=${total}`;
        const ipnUrl = `http://localhost:3000/payment_online/${code_oders}?fullName=${full_name_user}&phoneNumber=${tel_user}&address=${address_user}&${id}&${quantity}&total=${total}`;
        const requestType = "payWithMethod";
        const amount = total;
        const orderId = partnerCode + new Date().getTime();
        const requestId = orderId;
        const extraData = '';
        const orderGroupId = '';
        const autoCapture = true;
        const lang = 'en';
        const rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;
        console.log("--------------------RAW SIGNATURE----------------");
        console.log(rawSignature);
        const crypto = require('crypto');
        const signature = crypto.createHmac('sha256', secretKey)
            .update(rawSignature)
            .digest('hex');
        console.log("--------------------SIGNATURE----------------");
        console.log(signature);
        const requestBody = JSON.stringify({
            partnerCode: partnerCode,
            partnerName: "Test",
            storeId: "MomoTestStore",
            requestId: requestId,
            amount: amount,
            orderId: orderId,
            orderInfo: orderInfo,
            redirectUrl: redirectUrl,
            ipnUrl: ipnUrl,
            lang: lang,
            requestType: requestType,
            autoCapture: autoCapture,
            extraData: extraData,
            orderGroupId: orderGroupId,
            signature: signature
        });
        const options = {
            method: 'POST',
            url: 'https://test-payment.momo.vn/v2/gateway/api/create',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(requestBody)
            },
            data: requestBody
        };
        try {
            const result = await axios(options);
            return res.redirect(result.data.shortLink);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    }
}
var cancelOrder = (req, res) => {
    OrderModel.updateStatusOrder(req.params.code_order, 6)
    setTimeout(() => {
        return res.redirect(`/orders`);
    }, 100);
}
var allOrders = (req, res) => {
    Promise.all([
            OrderModel.orderWStatus(0, req.cookies.user),
            OrderModel.orderWStatus(3, req.cookies.user),
            OrderModel.orderWStatus(4, req.cookies.user),
            OrderModel.orderWStatus(5, req.cookies.user),
            OrderModel.orderWStatus(7, req.cookies.user),
            OrderModel.orderWStatus(6, req.cookies.user),
        ])
        .then(([all, order3, order4, order5, order7, order6]) => {
            res.render('client/orders', {
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
module.exports = {
    addOrder,
    orderDetail,
    addPaymentOnline,
    allOrders,
    cancelOrder
}