import db from '../../database/models';
const {
    Sequelize,
    Op,
    where
} = require('sequelize');
async function orderWCode(code_oders) {
    var cartWIdUser = await db.DetailOrder.findOne({
        where: {
            code_oders: code_oders,
        }
    });
    if (cartWIdUser) {
        return cartWIdUser;
    }
}
async function orderWStatus(status_order, id_user) {
    if (id_user != 0) {
        if (status_order == 0) {
            var orderWStatus = await db.DetailOrder.findAll({
                where: {
                    id_user: id_user
                },
            });
        } else {
            var orderWStatus = await db.DetailOrder.findAll({
                where: {
                    code_status: status_order,
                    id_user: id_user
                },
            });
        }
        if (orderWStatus) {
            return orderWStatus;
        }
    } else {
        if (status_order == 0) {
            var orderWStatus = await db.DetailOrder.findAll({});
        } else {
            var orderWStatus = await db.DetailOrder.findAll({
                where: {
                    code_status: status_order,
                },
            });
        }
        if (orderWStatus) {
            return orderWStatus;
        }
    }
}
async function createDetailOrder(id_user, full_name_user, tel_user, address_user, total, payment_method, code_status, code_oders) {
    db.DetailOrder.create({
        id_user: id_user,
        full_name_user: full_name_user,
        tel_user: tel_user,
        address_user: address_user,
        price_total: total,
        payment_method: payment_method,
        code_status: code_status,
        code_oders: code_oders,
    });
}
async function updateStatusOrder(code_oders, code_status) {
    await db.DetailOrder.update({
        code_status: code_status,
    }, {
        where: {
            code_oders: code_oders,
        }
    });
}
module.exports = {
    createDetailOrder,
    orderWCode,
    orderWStatus,
    updateStatusOrder,
};