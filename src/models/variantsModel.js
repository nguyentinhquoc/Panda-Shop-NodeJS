import db from '../../database/models';
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

function editVariants(id_product, id_Variant, quantity_variant) {
    db.Variant.update({
        quantity_variant: quantity_variant,
    }, {
        where: {
            id_product: id_product,
            code_variant: id_Variant,
        }
    });
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

module.exports = {
    listColors,
    listSizes,
    addVariants,
    VariantsWIdProduct,
    editVariants,
    VariantsWColorSize,
    addSize,
    addColor
};