import db from '../../database/models';
import bcrypt from 'bcryptjs';
const {
    Sequelize,
    Op
} = require('sequelize');

var salt = bcrypt.genSaltSync(10);

async function addACcount(avatar_account, address_account, full_name_account, pass_account, email_account, tel_account) {
    var hashPass = bcrypt.hashSync(pass_account, salt);
    db.Account.create({
        avatar_account: avatar_account,
        address_account: address_account,
        full_name_account: full_name_account,
        pass_account: hashPass,
        email_account: email_account,
        tel_account: tel_account,
        role_account: 1,
        status_account: 1,
        online: 0,
    });
}
async function accountAll() {
    try {
        const accountAll = await db.Account.findAll({});
        if (accountAll) {
            return accountAll;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}
async function accountAllAdmin() {
    try {
        const accountAll = await db.Account.findAll({
            attributes: [
                'id',
                'full_name_account',
                'email_account',
                'address_account',
                'tel_account',
                'role_account',
                'status_account',
                [Sequelize.fn('COUNT', Sequelize.col('ClassificationOrders.id')), 'total_classificationorders']
            ],
            include: [{
                model: db.ClassificationOrder,
                attributes: [],
                required: false
            }],
            group: [
                'Account.id',
                'Account.full_name_account',
                'Account.email_account',
                'Account.address_account',
                'Account.tel_account',
                'Account.role_account',
                'Account.status_account'
            ],
            order: [
                ['status_account', 'DESC']
            ],
            raw: true
        });

        return accountAll;
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function accountWId(id) {
    try {
        const account = await db.Account.findOne({
            where: {
                id: id,
            }
        });
        if (account) {
            return account;
        }
    } catch (error) {
        console.error(error);
    }
}
async function changeOnline(AccountId, onine) {
    await db.Account.update({
        online: onine
    }, {
        where: {
            id: AccountId
        }
    });
}
async function changeStatus(AccountId) {
    const statusNow = await db.Account.findOne({
        where: {
            id: AccountId,
        }
    });
    if (statusNow.status_account == 1) {
        await db.Account.update({
            status_account: 0
        }, {
            where: {
                id: AccountId
            }
        });
    } else {
        await db.Account.update({
            status_account: 1
        }, {
            where: {
                id: AccountId
            }
        });
    }
}
async function accountTop7() {
    try {
        const accountAll = await db.Account.findAll({
            attributes: [
                'id',
                'full_name_account',
                'email_account',
                'address_account',
                'tel_account',
                'online',
                'role_account',
                'status_account',
                [Sequelize.fn('COUNT', Sequelize.col('ClassificationOrders.id')), 'total_classificationorders']
            ],
            include: [{
                model: db.ClassificationOrder,
                attributes: [],
                required: false
            }],
            group: [
                'Account.id',
                'Account.full_name_account',
                'Account.email_account',
                'Account.address_account',
                'Account.tel_account',
                'Account.online',
                'Account.role_account',
                'Account.status_account'
            ],
            order: [
                [Sequelize.literal('total_classificationorders'), 'DESC']
            ],
            raw: true
        });

        return accountAll;
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function CountAccountAll() {
    try {
        const accountCount = await db.Account.count();
        return accountCount;
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function CountAccountOnline() {
    try {
        const accountCount = await db.Account.count({
            where: {
                online: 1
            }
        });
        return accountCount;
    } catch (error) {
        console.error(error);
        return null;
    }
}
module.exports = {
    addACcount,
    accountAll,
    accountWId,
    changeStatus,
    accountAllAdmin,
    accountTop7,
    changeOnline,
    CountAccountOnline,
    CountAccountAll
};