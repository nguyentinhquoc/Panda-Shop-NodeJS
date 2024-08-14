import express from 'express';
const CryptoJS = require('crypto-js'); // npm install crypto-js
const moment = require('moment'); // npm install moment
import ProductControllerAdmin from '../controllers/admin/ProductController';
import HomeController from '../controllers/client/HomeController';
import AccountController from '../controllers/client/AccountController';
import ShopController from '../controllers/client/ShopController';
import DetailController from '../controllers/client/DetailController';
import AboutController from '../controllers/client/AboutController';
import GalleryController from '../controllers/client/GalleryController';
import VariableLocal from '../controllers/client/VariableLocalProductController';
import CartController from '../controllers/client/CartController';
import OrderController from '../controllers/client/OrderController';
import profileController from '../controllers/client/ProfileController';
import ordersControllerAdmin from '../controllers/admin/OrderController';
import contactController from '../controllers/client/ContactController';
import reviewsController from '../controllers/client/ReviewsController';
import CategoryAdmin from '../controllers/admin/CategoryAdmin';
import AccountAdmin from '../controllers/admin/AccountAdmin';
import VariantAdmin from '../controllers/admin/VariantAdmin';
import HomeAdmin from '../controllers/admin/HomeAdmin';
import ContactAdmin from '../controllers/admin/ContactAdmin';
import errorPageController from '../controllers/errorPageController';

const crypto = require('crypto');
const qs = require('qs');

const router = express.Router();
const routerWeb = (app) => {
    app.use(VariableLocal.VariableLocal);
    app.use(VariableLocal.VariableLocalNoUser);
    app.use((req, res, next) => {
        res.locals.flash = req.flash();
        next();
    });
    const {
        isAdmin,
        isUser
    } = require('../../middleware/roleMiddleware');
    /* ---------------------------------- ADMIN --------------------------------- */

    app.get('/admin', isAdmin, HomeAdmin.HomeAdmin)
    app.get('/admin/add-product', isAdmin, ProductControllerAdmin.addProduct)
    app.post('/admin/add-product', isAdmin, ProductControllerAdmin.subAddProduct)
    app.get('/admin/list-product/:id', isAdmin, ProductControllerAdmin.listProducts)
    app.get('/admin/edit-product/:id', isAdmin, ProductControllerAdmin.editProducts)
    app.post('/admin/edit-product/:id', isAdmin, ProductControllerAdmin.subEditProducts)
    app.get('/admin/change-status-product/:id', isAdmin, ProductControllerAdmin.changeStatus)
    app.get('/admin/orders/:iduser', isAdmin, ordersControllerAdmin.allOrdersad)
    app.get('/admin/deitail-order/:code_order', isAdmin, ordersControllerAdmin.detailOrderAd)
    app.get('/admin/update/:code_order/:status', isAdmin, ordersControllerAdmin.updateStatus)
    app.get('/admin/list-category', isAdmin, CategoryAdmin.listCategory)
    app.post('/admin/change-status-category/:id', isAdmin, CategoryAdmin.changeStatus)
    app.post('/admin/edit-name-category/:id', isAdmin, CategoryAdmin.editNameCategory)
    app.post('/admin/add-new-category', isAdmin, CategoryAdmin.addCategory)
    app.get('/admin/list-account', isAdmin, AccountAdmin.listAccount)
    app.post('/admin/change-status-account/:id', isAdmin, AccountAdmin.changeStatus)
    app.get('/admin/list-variant', isAdmin, VariantAdmin.listVariant)
    app.post('/admin/add-new-size', isAdmin, VariantAdmin.addSize)
    app.post('/admin/add-new-color', isAdmin, VariantAdmin.addColor)
    app.get('/admin/contact', ContactAdmin.listContact)
    app.post('/admin/contact', ContactAdmin.contactDelte)
    /* ----------------------------------- --- ---------------------------------- */
    /* --------------------------------- CLIENT --------------------------------- */
    app.get('/', HomeController.home);
    app.get('/register', AccountController.register);
    app.post('/register', AccountController.registerSb);
    app.get('/login', AccountController.login);
    app.post('/login', AccountController.loginSb);
    app.get('/shop/:name/:page/:search', ShopController.listProducts);
    app.post('/shop/:name/:page/:search', ShopController.listProducts);
    app.get('/detail-product/:id', DetailController.detailProduct);
    app.post('/detail-product/:id', DetailController.addCart);
    app.get('/about', AboutController.about);
    app.get('/gallery', GalleryController.gallery);
    app.get('/cart', CartController.listCart);
    app.post('/cart', OrderController.addOrder);
    app.get('/destroy/cart/:id', CartController.destroyCart);
    app.post('/create_payment_url', OrderController.addOrder);
    app.get('/order/:code_order', OrderController.orderDetail);
    app.get('/payment_online/:code_order', OrderController.addPaymentOnline);
    app.get('/profile', profileController.detailProfile);
    app.get('/orders', OrderController.allOrders);
    app.get('/logout', AccountController.logout);
    app.get('/reviews/:code_order', reviewsController.reviews);
    app.post('/reviews/:code_order', reviewsController.reviewsPost);
    app.get('/contact', contactController.contact);
    app.post('/contact', contactController.contactP);
    app.get('/404', errorPageController.Er404);


    app.use((req, res, next) => {
        res.status(404).redirect('/404'); // Hoặc bạn có thể render một trang lỗi ở đây
    });
}
export default routerWeb;