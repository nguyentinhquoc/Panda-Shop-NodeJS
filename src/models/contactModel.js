import db from '../../database/models';

const {
    Sequelize,
    Op
} = require('sequelize');

async function addContact(content_contact, full_name_contact, email_contact, tel_contact) {
    db.Contact.create({
        content_contact: content_contact,
        full_name_contact: full_name_contact,
        email_contact: email_contact,
        tel_contact: tel_contact
    });
}
async function listContact() {
    try {
        const ContactAll = await db.Contact.findAll({});
        if (ContactAll) {
            return ContactAll;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
async function deleteContact(id) {
    return await db.Contact.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    addContact,
    listContact,
    deleteContact
};