import db from '../../database/models';

const {
    Sequelize,
    Op,
    where
} = require('sequelize');

async function changeStatus(productId) {
    const statusNow = await db.Product.findOne({
        where: {
            id: productId,
        }
    });

    if (statusNow.status_product == 1) {
        await db.Product.update({
            status_product: 0
        }, {
            where: {
                id: productId
            }
        });
    } else {
        await db.Product.update({
            status_product: 1
        }, {
            where: {
                id: productId
            }
        });
    }

}

function addProduct(name_product, price_product, price_sale, image_product, description_product, id_category, code_products) {
    db.Product.create({
        name_product: name_product,
        price_product: price_product,
        price_sale: price_sale,
        image_product: image_product,
        description_product: description_product,
        view_product: 0,
        id_category: id_category,
        status_product: 1,
        code_product: code_products
    });
}
async function editProducts(productId, name_product, price_product, price_sale, image_product, description_product, id_category) {
    await db.Product.update({
        name_product: name_product,
        price_product: price_product,
        price_sale: price_sale,
        image_product: image_product,
        description_product: description_product,
        id_category: id_category,
    }, {
        where: {
            id: productId
        }
    });
}
async function productWhereId(id) {
    try {
        const product = await db.Product.findOne({
            where: {
                id: id,
            }
        });
        if (product) {
            return product;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
async function productWhereCode(code_product) {
    try {
        const product = await db.Product.findOne({
            where: {
                code_product: code_product,
            }
        });
        if (product) {
            return product.id;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
async function top10New() {
    try {
        const topSales = await db.Variant.findAll({
            attributes: [
                [Sequelize.fn('SUM', Sequelize.col('sales')), 'sales'],
                [Sequelize.col('Product.id'), 'id'],
            ],
            include: [{
                model: db.Product,
            }],
            group: ['id'],
            order: [
                ['id', 'DESC']
            ],
            limit: 10
        });
        if (topSales) {
            return topSales;
        }
    } catch (error) {
        console.log(error);
    }
}
async function top10Sale() {
    try {
        const topSales = await db.Variant.findAll({
            attributes: [
                [Sequelize.fn('SUM', Sequelize.col('sales')), 'sales'],
                [Sequelize.col('Product.id'), 'id'],
            ],
            include: [{
                model: db.Product,
            }],
            group: ['id'],
            order: [
                ['sales', 'DESC']
            ],
            limit: 10
        });
        if (topSales) {
            return topSales;
        }
    } catch (error) {
        console.log(error);
    }
}

async function countProduct(search, name) {
    try {
        if (name == 'all-product') {
            const product = await db.Product.findAll({
                include: [{
                    model: db.Category,
                }, {
                    model: db.Variant,
                }],
                where: {
                    status_product: 1,
                    name_product: {
                        [Op.like]: `%${search}%`,
                    },
                },
            });
            if (product) {
                return product;
            }
        } else {
            const product = await db.Product.findAll({
                include: [{
                    model: db.Category,
                    where: {

                        name_category: name,
                    }
                }, {
                    model: db.Variant,
                }],
                where: {
                    status_product: 1,
                    name_product: {
                        [Op.like]: `%${search}%`,
                    },
                },
            });
            if (product) {
                return product;
            }
        }
    } catch (error) {
        console.error(error);
    }
}
async function listProducts(search, name, page) {
    var page = parseInt(page);
    try {
        if (name == 'all-product') {
            try {
                const product = await db.Variant.findAll({
                    attributes: [
                        [Sequelize.fn('SUM', Sequelize.col('sales')), 'sales'],
                        [Sequelize.col('Product.id'), 'id'],
                    ],
                    include: [{
                        model: db.Product,
                        include: [{
                            model: db.Category,
                            where: {
                                status_category: 1
                            }
                        }],
                        where: {
                            status_product: 1,
                            name_product: {
                                [Op.like]: `%${search}%`,
                            },
                        },
                    }],
                    group: ['id'],
                    order: [
                        ['id', 'DESC']
                    ],
                    limit: 9,
                    offset: (page * 9) - 9,
                });
                if (product) {
                    return product;
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const product = await db.Variant.findAll({
                    attributes: [
                        [Sequelize.fn('SUM', Sequelize.col('sales')), 'sales'],
                        [Sequelize.col('Product.id'), 'id'],
                    ],
                    include: [{
                        model: db.Product,
                        include: [{
                            model: db.Category,
                            where: {
                                name_category: name,
                                status_category: 1
                            }
                        }],
                        where: {
                            status_product: 1,
                            name_product: {
                                [Op.like]: `%${search}%`,
                            },
                        },
                    }],
                    group: ['id'],
                    order: [
                        ['id', 'DESC']
                    ],
                    limit: 9,
                    offset: (page * 9) - 9,
                });
                if (product) {
                    return product;
                }
            } catch (error) {
                console.log(error);
            }
        }
    } catch (error) {
        console.error(error);
    }
}
async function listProductsAdmin(name) {
    try {
        if (name == 'all-product') {
            const product = await db.Product.findAll({
                include: {
                    model: db.Category,
                    where: {
                        status_category: 1
                    }
                },
                where: {
                    status_product: 1,
                },
            });
            if (product) {
                return product;
            }
        } else if (name == 'product-remove') {
            const product = await db.Product.findAll({
                include: {
                    model: db.Category,
                    where: {
                        status_category: 1
                    }
                },
                where: {
                    status_product: 0,
                },
            });
            if (product) {
                return product;
            }
        } else {
            const product = await db.Product.findAll({
                include: {
                    model: db.Category,
                    where: {
                        name_category: name,
                        status_category: 1
                    }
                },
                where: {
                    status_product: 1,
                },
            });
            if (product) {
                return product;
            }
        }
    } catch (error) {
        console.error(error);
    }
}

async function detailProducts(id) {
    try {
        const product = await db.Product.findOne({
            include: {
                model: db.Category,
            },
            where: {
                id: id,
            }
        });
        if (product) {
            return product;
        }
    } catch (error) {
        console.error(error);
    }
}
async function countProductDash() {
    try {
        const totalCountResult = await db.Product.count();
        if (totalCountResult) {
            return totalCountResult;
        }
    } catch (error) {
        console.log(error);
    }
};
async function countCategoryDash() {
    try {
        const result = await db.Product.findAll({
            attributes: [
                [Sequelize.fn('COUNT', Sequelize.col('Product.id')), 'count'],
            ],
            include: [{
                model: db.Category,
                attributes: ['name_category']
            }],
            group: ['Category.id'],
            raw: true
        });
        if (result) {
            return result;
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    changeStatus,
    addProduct,
    productWhereId,
    productWhereCode,
    listProducts,
    editProducts,
    top10New,
    top10Sale,
    detailProducts,
    countProduct,
    countProductDash,
    countCategoryDash,
    listProductsAdmin
};