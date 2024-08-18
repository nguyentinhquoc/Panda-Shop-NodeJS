import accountModel from '../../models/accountModel';
import bcrypt from 'bcryptjs';
var salt = bcrypt.genSaltSync(10);
import uploadImg from '../../configs/uploadImages';
import e from 'connect-flash';
import MailMessage from 'nodemailer/lib/mailer/mail-message';
const multer = require('multer');
var upload = uploadImg.uploadAvatar;
const nodemailer = require("nodemailer");

var register = (req, res) => {
    res.render('client/register')
}
var checkRegister = (req, res) => {
    res.render('client/checkRegister')
}
var resetPassWord = (req, res) => {
    res.render('client/resetPassWord')
}
var resetPassWordP = (req, res) => {
    var check = false;
    var id_user = ''
    Promise.all([
            accountModel.accountAll()
        ])
        .then((accountAll) => {
            let idUser = null;
            accountAll[0].forEach(element => {
                if (req.cookies.RPuser == element.id) {
                    id_user = element.id_user;
                    check = true;
                }
            });

            if (check) {
                accountModel.changePass(req.cookies.RPuser, req.body.password);
                res.redirect('/login');
            }
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}
var forgotPassword = (req, res) => {
    res.render('client/forgotPassword')
}
var forgotPasswordP = (req, res) => {
    var check = false;
    var idUser = 0;
    Promise.all([
            accountModel.accountAll()
        ])
        .then((accountAll) => {
            accountAll[0].forEach(element => {
                if (req.body.email_account == element.email_account) {
                    idUser = element.id;
                    return check = true;
                }
            });
            if (!check) {
                req.flash('checklogin', 'error');
                res.redirect('/login');
            } else {
                res.cookie('RPuser', idUser, {
                    maxAge: 300000,
                    httpOnly: true,
                });
                var MailMess = `
               <div style="text-align: center; font-family: Arial, sans-serif; padding: 20px;">
  <p style="color: #333; font-size: 18px; margin-bottom: 20px;">Bấm vào đây để đổi mật khẩu:</p>
  <a href="http://localhost:3000/reset-password" style="display: inline-block; padding: 15px 30px; background: linear-gradient(45deg, #FF6B6B, #4ECDC4); color: white; text-decoration: none; font-weight: bold; font-size: 16px; border-radius: 50px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;">
    <span style="display: inline-block; transition: transform 0.3s ease;">Đổi mật khẩu</span>
  </a>
</div>`
                sendMail(req.body.email_account, MailMess)
                res.redirect('/login');
            }
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });

}
var checkRegisterP = (req, res) => {
    var check = false;
    Promise.all([
            accountModel.accountAll()
        ])
        .then((accountAll) => {
            if (req.body.check == 1) {
                accountAll[0].forEach(element => {
                    if (req.body.email_account == element.email_account) {
                        accountModel.changeStatus(element.id)
                        return check = true;
                    }
                });
                if (check == true) {
                    req.flash('checklogin', 'error');
                    res.redirect('/login');
                }
            } else {
                var MailMess = `
                <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
  <p style="font-size: 20px; color: #333; margin-bottom: 15px;">
    Mã xác nhận của bạn là
  </p>
  <div style="display: inline-block; background: linear-gradient(45deg, #007bff, #00ffcc); padding: 3px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <span style="display: block; background-color: white; padding: 15px 30px; border-radius: 5px; font-size: 28px; font-weight: bold; color: #007bff; letter-spacing: 2px;">
      ${req.body.status_account}
    </span>
  </div>
  <p style="font-size: 16px; color: #666; margin-top: 15px;">
    Vui lòng sử dụng mã này để hoàn tất quá trình đăng ký của bạn.
  </p>
</div>
                `
                sendMail(req.body.email_account, MailMess)
                req.flash('codeCheck', req.body.status_account);
                req.flash('email_account', req.body.email_account);
                res.redirect('/checkRegister');
            }
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });

}

var registerSb = (req, res) => {

    upload.single('avatar_account')(req, res, function (err) {
        var check = true;
        accountModel.accountAll()
            .then((accountAll) => {
                accountAll.forEach(element => {
                    if (req.body.email_account == element.email_account) {
                        check = false;
                    }
                    if (req.body.tel_account == element.tel_account) {
                        check = false;
                    }
                });
                if (check) {
                    if (req.file) {
                        var image_product = req.file.filename;
                        var address_account = req.body.xa + '-' + req.body.huyen + '-' + req.body.tinh;
                        var status_account = Math.floor(100000 + Math.random() * 900000);
                        if (accountModel.addAccount(image_product, address_account, req.body.full_name_account, req.body.pass_account, req.body.email_account, req.body.tel_account, status_account)) {
                            var MailMess = `
                <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
  <p style="font-size: 20px; color: #333; margin-bottom: 15px;">
    Mã xác nhận của bạn là
  </p>
  <div style="display: inline-block; background: linear-gradient(45deg, #007bff, #00ffcc); padding: 3px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <span style="display: block; background-color: white; padding: 15px 30px; border-radius: 5px; font-size: 28px; font-weight: bold; color: #007bff; letter-spacing: 2px;">
      ${status_account}
    </span>
  </div>
  <p style="font-size: 16px; color: #666; margin-top: 15px;">
    Vui lòng sử dụng mã này để hoàn tất quá trình đăng ký của bạn.
  </p>
</div>
                            `
                            sendMail(req.body.email_account, MailMess)
                            req.flash('codeCheck', status_account);
                            req.flash('email_account', req.body.email_account);
                            res.redirect('/checkRegister');
                        } else {
                            console.log('Thêm tài khoản thất bại');
                        }
                    }
                } else {
                    req.flash('checkregister', 'error');
                    res.redirect('/register');
                }
            })
    })

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
                if (req.body.email_account == element.email_account && pass_account && element.status_account == 1) {
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
async function sendMail(email, code) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "pandashop1403@gmail.com",
            pass: "yhznuixpanncarrd",
        },
    });
    try {
        let info = await transporter.sendMail({
            from: 'pandashop1403@gmail.com',
            to: `${email}`,
            subject: "PandaShop",
            text: code,
            html: `${code}`,
        });
    } catch (error) {
        console.log("Error sending email: ", error);
    }
}
module.exports = {
    login,
    loginSb,
    register,
    registerSb,
    logout,
    checkRegister,
    checkRegisterP,
    forgotPassword,
    forgotPasswordP,
    resetPassWord,
    resetPassWordP
}