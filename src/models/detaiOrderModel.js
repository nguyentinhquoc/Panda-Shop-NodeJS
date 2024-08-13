import db from '../../database/models';

const {
    Sequelize,
    Op
} = require('sequelize');

async function DetailOrderAdminDate() {
    var DetailOrderAdminDate = db.DetailOrder.findAll({
        attributes: [
            [Sequelize.fn('DATE_FORMAT', Sequelize.col('createdAt'), '%Y'), 'year'],
            [Sequelize.fn('DATE_FORMAT', Sequelize.col('createdAt'), '%m'), 'month'],
            [Sequelize.fn('COUNT', Sequelize.col('id')), 'orderCount']
        ],
        where: {
            createdAt: {
                [Op.gte]: Sequelize.literal('DATE_SUB(CURDATE(), INTERVAL 12 MONTH)')
            },
            [Op.or]: [{
                    code_status: 6
                },
                {
                    code_status: 7
                }
            ]
        },
        group: [Sequelize.fn('DATE_FORMAT', Sequelize.col('createdAt'), '%Y'), Sequelize.fn('DATE_FORMAT', Sequelize.col('createdAt'), '%m')],
        order: [
            [Sequelize.fn('DATE_FORMAT', Sequelize.col('createdAt'), '%Y'), 'DESC'],
            [Sequelize.fn('DATE_FORMAT', Sequelize.col('createdAt'), '%m'), 'DESC']
        ]
    })
    if (DetailOrderAdminDate) {
        return DetailOrderAdminDate
    }
}

module.exports = {
    DetailOrderAdminDate,
};