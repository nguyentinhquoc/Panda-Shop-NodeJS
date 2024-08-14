import contactModel from "../../models/contactModel";
var listContact = (req, res) => {
    contactModel.listContact()
        .then((listContact) => {
            res.render('admin/list_contact', {
                listContact
            });
        }).catch((err) => {});
}
var contactDelte = async (req, res) => {
    try {
        var id = req.body.id;
        if (contactModel.deleteContact(id)) {
            res.redirect(req.headers.referer || '/fallback-route');
        }
    } catch (error) {
        console.error(error);
    }
}
module.exports = {
    listContact,
    contactDelte
}