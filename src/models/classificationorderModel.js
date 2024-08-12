import db from '../../database/models';
const {
    Sequelize,
    Op
} = require('sequelize');
async function addClassificationorderCheck(id_user, quantity, code_status, id_variants) {
    var addClassificationorderCheck = await db.ClassificationOrder.findAll({
        where: {
            id_user: id_user,
            code_status: code_status,
            id_variants: id_variants,
        }
    });
    if (addClassificationorderCheck.length > 0) {
        return addClassificationorderCheck;
    } else {
        return false;
    }
}
async function addClassificationorder(id_user, quantity, code_status, id_variants) {
    db.ClassificationOrder.create({
        id_user: id_user,
        quantity: quantity,
        code_status: code_status,
        id_variants: id_variants,
        code_oders: 0,
    });
}
async function updateClassificationorder(id_user, quantity, code_status, id_variants) {
    db.ClassificationOrder.update({
        quantity: quantity,
    }, {
        where: {
            id_variants: id_variants,
            id_user: id_user,
            code_status: code_status,
        }
    });
}
async function numberInCart(id_user) {
    var numberInCart = await db.ClassificationOrder.findOne({
        attributes: [
            [Sequelize.fn('COUNT', Sequelize.col('id')), 'countCart'],
        ],
        where: {
            id_user: id_user,
            code_status: 2,
        }
    });
    if (numberInCart) {
        return numberInCart;
    }
}
async function checkStatus(code_oders) {
    var checkStatus = await db.ClassificationOrder.findOne({
        where: {
            code_oders: code_oders,
        }
    });
    if (checkStatus) {
        return checkStatus;
    }
}

async function orderWCode(code_oders) {
    var cartWIdUser = await db.ClassificationOrder.findAll({
        include: [{
            model: db.Variant,
            include: [{
                    model: db.Color
                },
                {
                    model: db.Size
                },
                {
                    model: db.Product
                }
            ],
        }],
        where: {
            code_oders: code_oders,
        }
    });
    if (cartWIdUser) {
        return cartWIdUser;
    }
}

async function ClassificationOrderWCodeOrder(code_oders) {
    var ClassificationOrderWCodeOrder = await db.ClassificationOrder.findAll({
        where: {
            code_oders: code_oders,
        }
    });
    if (ClassificationOrderWCodeOrder) {
        return ClassificationOrderWCodeOrder;
    }
}
async function cartWIdUser(id_user) {
    var cartWIdUser = await db.ClassificationOrder.findAll({
        include: [{
            model: db.Variant,
            include: [{
                    model: db.Color
                },
                {
                    model: db.Size
                },
                {
                    model: db.Product
                }
            ],

        }],
        where: {
            id_user: id_user,
            code_status: 2,
        }
    });
    if (cartWIdUser) {
        return cartWIdUser;
    }
}
async function deleteWId(id, id_user) {
    if (id != 0) {
        await db.ClassificationOrder.destroy({
            where: {
                id: id,
                id_user: id_user,
            }
        });
    } else {
        await db.ClassificationOrder.destroy({
            where: {
                id_user: id_user,
            }
        });
    }
}
async function updateWId(id, quantity, code_oders) {
    if (!Array.isArray(id)) {
        await db.ClassificationOrder.update({
            quantity: quantity,
            code_status: 3,
            code_oders: code_oders,
        }, {
            where: {
                id: id,
            }
        });
    } else {
        for (let i = 0; i < id.length; i++) {
            await db.ClassificationOrder.update({
                quantity: quantity[i],
                code_status: 3,
                code_oders: code_oders,
            }, {
                where: {
                    id: id[i],
                }
            });
        }
    }
}
async function updateStatusCl(code_oders, code_status) {
    await db.ClassificationOrder.update({
        code_status: code_status,
    }, {
        where: {
            code_oders: code_oders,
        }
    });
}
module.exports = {
    addClassificationorder,
    numberInCart,
    cartWIdUser,
    deleteWId,
    updateWId,
    orderWCode,
    checkStatus,
    ClassificationOrderWCodeOrder,
    updateStatusCl,
    addClassificationorderCheck,
    updateClassificationorder
};