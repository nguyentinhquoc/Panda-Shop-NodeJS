import db from '../../database/models';

const {
    Sequelize,
    Op
} = require('sequelize');

async function addReview(id_user, id_variants, content, rating) {
    db.Review.create({
        id_user: id_user,
        content_review: content,
        id_variants: id_variants,
        star: rating,
    });
}
async function reviewsWIdProduct(id_product) {
    try {
        const Review = await db.Review.findAll({
            include: [{
                model: db.Variant,
                where: {
                    id_product: id_product,
                }
            }, {
                model: db.Account,
            }],
        });
        if (Review) {
            return Review;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addReview,
    reviewsWIdProduct
};