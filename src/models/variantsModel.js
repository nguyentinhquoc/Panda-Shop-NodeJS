import db from '../../database/models';

const {
    Sequelize,
    Op,
    where
} = require('sequelize');
async function listColors() {
    try {
        const listColors = await db.Color.findAll({});
        if (listColors) {
            return listColors;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
async function listColorsDetail(id_product) {
    try {
        const colors = await db.Color.findAll({
            where: {
                id: {
                    [Sequelize.Op.in]: Sequelize.literal(`(
          SELECT DISTINCT variants.id_color
          FROM variants 
          WHERE variants.id_product = ${id_product}
        )`)
                }
            }
        });

        if (colors) {
            return colors;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
async function listSizesDetail(id_product) {
    try {
        const sizes = await db.Size.findAll({
            where: {
                id: {
                    [Sequelize.Op.in]: Sequelize.literal(`(
          SELECT DISTINCT variants.id_size
          FROM variants 
          WHERE variants.id_product = ${id_product}
        )`)
                }
            }
        });

        if (sizes) {
            return sizes;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
async function listSizes() {
    try {
        const listSizes = await db.Size.findAll({});
        if (listSizes) {
            return listSizes;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}

function editVariants(id_Variant, quantity_variant, image_variant) {
    if (image_variant) {
        db.Variant.update({
            quantity_variant: quantity_variant,
            image_variant: image_variant,
        }, {
            where: {
                id: id_Variant,
            }
        });
    } else {
        db.Variant.update({
            quantity_variant: quantity_variant,
        }, {
            where: {
                id: id_Variant,
            }
        });
    }
}

function addVariants(id_product, id_color, id_size, quantity_variant, code_variant, image_variant_value) {
    db.Variant.create({
        id_product: id_product,
        id_color: id_color,
        id_size: id_size,
        sales: 0,
        quantity_variant: quantity_variant,
        code_variant: code_variant,
        image_variant: image_variant_value
    });
}

function addSize(name) {
    db.Size.create({
        name_size: name
    });
}

function addColor(name) {
    db.Color.create({
        name_color: name
    });
}
async function VariantsWIdProduct(id_product) {
    try {
        const Variants = await db.Variant.findAll({
            where: {
                id_product: id_product,
            }
        });
        if (Variants) {
            return Variants;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
async function VariantsWColorSize(id_product, id_color, id_size) {
    try {
        const Variants = await db.Variant.findOne({
            where: {
                id_product: id_product,
                id_color: id_color,
                id_size: id_size,
            }
        });
        if (Variants) {
            return Variants;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
async function changeSalesAndQuantity(id_variant, quantity) {
    try {
        await db.Variant.update({
            quantity_variant: Sequelize.literal(`quantity_variant - ${quantity}`),
            sales: Sequelize.literal(`sales + ${quantity}`),
        }, {
            where: {
                id: id_variant,
            }
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

module.exports = {
    listColors,
    listSizes,
    addVariants,
    VariantsWIdProduct,
    editVariants,
    VariantsWColorSize,
    addSize,
    addColor,
    listColorsDetail,
    listSizesDetail,
    changeSalesAndQuantity
};