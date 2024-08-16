import express from 'express';
const paginate = require('express-paginate');
import multer from 'multer';
var cookieSession = require('cookie-session')
import {
    faker
} from '@faker-js/faker';
import session from 'express-session';
import flash from 'connect-flash';
import cookieParser from 'cookie-parser';
import moment from 'moment';
const product = multer({
    dest: 'src/views/assets/product'
})

function formatDate(date) {
    const formattedDate = moment(date).format('MMMM DD YYYY, HH:mm:ss');
    return formattedDate
}
import configViewsEngine from './configs/viewsEngine';
import webRoute from './routes/web';
const port = 3000;
import connect from './configs/connectDB';
const app = express();

app.use(session({
    secret: 'flashblog',
    resave: false,
    saveUninitialized: true,
}));

app.use(flash());
app.use(cookieParser());
app.locals.formatDate = formatDate;
app.use(express.json());
app.use(paginate.middleware(9, 50));

app.use(express.urlencoded({
    extended: true
}));
connect()
configViewsEngine(app);
webRoute(app);
app.listen(port, () => {
    console.log('RUN SERVER SUCCESS');
    console.log('http://localhost:3000/');


})