import db from '../../database/models';

async function addGallery(Product, NameGallery, image) {
    db.Gallery.create({
        name: NameGallery,
        image: image,
        product_id: Product,
    });
}
async function listGallery() {
    try {
        const galleries = await db.Gallery.findAll({
            attributes: ['id', 'name', 'image', 'product_id', 'createdAt', 'updatedAt'],
            include: [{
                model: db.Product,
                attributes: [
                    ['id', 'idProduct'],
                    'image_product',
                    'name_product'
                ],
                required: false
            }]
        });

        if (galleries) {
            return galleries;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
async function deleteGallery(id) {
    return await db.Gallery.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    listGallery,
    addGallery,
    deleteGallery
};