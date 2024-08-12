import db from '../../database/models';
const {
    Sequelize,
    Op,
    where
} = require('sequelize');

async function categories() {
    try {
        const categories = await db.Category.findAll({
            where: {
                status_category: 1
            }
        });
        if (categories) {
            return categories;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
async function categoriesAdmin() {
    try {
        const categories = await db.Category.findAll({});
        if (categories) {
            return categories;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
async function changeStatus(CategoryId) {
    const statusNow = await db.Category.findOne({
        where: {
            id: CategoryId,
        }
    });
    if (statusNow.status_category == 1) {
        await db.Category.update({
            status_category: 0
        }, {
            where: {
                id: CategoryId
            }
        });
    } else {
        await db.Category.update({
            status_category: 1
        }, {
            where: {
                id: CategoryId
            }
        });
    }
}
async function editName(CategoryId, NameNew) {
    await db.Category.update({
        name_category: NameNew
    }, {
        where: {
            id: CategoryId
        }
    });
}
async function addCategories(name_category, status_category) {
    db.Category.create({
        name_category: name_category,
        status_category: status_category,
    });
}
async function Countcategories() {
    try {
        const Countcategories = await db.Category.findAll({
            attributes: [
                'name_category',
                [Sequelize.fn('COUNT', Sequelize.col('Category.id')), 'Category_Count']
            ],
            include: [{
                model: db.Product,
                attributes: []
            }],
            group: ['Category.id'],
            raw: true
        });
        if (Countcategories) {
            return Countcategories;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
module.exports = {
    Countcategories,
    categories,
    changeStatus,
    editName,
    addCategories,
    categoriesAdmin
};