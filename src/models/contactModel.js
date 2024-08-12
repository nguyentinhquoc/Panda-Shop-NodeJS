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

module.exports = {
    addContact,
};