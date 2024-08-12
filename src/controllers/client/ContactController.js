import reviewModel from '../../models/contactModel';

var contact = async (req, res) => {
    res.render('client/contact')
}
var contactP = async (req, res) => {

    try {
        var content_contact = req.body.content_contact;
        var full_name_contact = req.body.full_name_contact;
        var email_contact = req.body.email_contact;
        var tel_contact = req.body.tel_contact;
        reviewModel.addContact(content_contact, full_name_contact, email_contact, tel_contact);
    } catch (error) {
        console.error(error);
    }
}
module.exports = {
    contact,
    contactP
}