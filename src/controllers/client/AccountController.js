import accountModel from '../../models/accountModel';
import bcrypt from 'bcryptjs';
var salt = bcrypt.genSaltSync(10);
import uploadImg from '../../configs/uploadImages';
const multer = require('multer');
var upload = uploadImg.uploadAvatar;

var register = (req, res) => {
    res.render('client/register')
}
var registerSb = (req, res) => {
    var check = true;
    Promise.all([
            accountModel.accountAll()
        ])
        .then((accountAll) => {
            accountAll[0].forEach(element => {
                if (req.body.email_account == element.email_account) {
                    check = false;
                }
                if (req.body.tel_account == element.tel_account) {
                    check = false;
                }
            });
            if (check) {
                upload.single('avatar_account')(req, res, function (err) {
                    if (req.file) {
                        var image_product = req.file.filename;
                        var address_account = req.body.address_account
                        if (accountModel.addACcount(image_product, address_account, req.body.full_name_account, req.body.pass_account, req.body.email_account, req.body.tel_account)) {
                            req.flash('checkregister', 'success');
                            res.redirect('/login');
                        } else {
                            console.log('Thêm tài khoản thất bại');
                        }
                    }
                })
            } else {
                req.flash('checkregister', 'error');
                res.redirect('/register');
            }
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}
var login = (req, res) => {
    res.render('client/login', )
}
var logout = (req, res) => {
    accountModel.changeOnline(req.cookies.user, 0)
    res.clearCookie('user');
    req.flash('checkLogOut', 'success');
    res.redirect('/')
}
var loginSb = (req, res) => {
    var check = false;
    Promise.all([
            accountModel.accountAll()
        ])
        .then((accountAll) => {
            let idUser = null;
            accountAll[0].forEach(element => {
                var pass_account = bcrypt.compareSync(req.body.pass_account, element.pass_account);
                if (req.body.email_account == element.email_account && pass_account) {
                    idUser = element.id;
                    check = true;
                }
            });
            if (check) {
                res.cookie('user', idUser, {
                    maxAge: 7200000,
                    httpOnly: true,
                });
                accountModel.changeOnline(idUser, 1)
                accountModel.accountWId(idUser)
                    .then((value) => {
                        if (value.role_account == 1) {
                            req.flash('checklogin', 'success');
                            res.redirect('/');
                        } else if (value.role_account == 2) {
                            req.flash('checklogin', 'success');
                            res.redirect('/admin');
                        }
                    })
            } else {
                req.flash('checklogin', 'error');
                res.redirect('/login');
            }
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}
module.exports = {
    login,
    loginSb,
    register,
    registerSb,
    logout
}