const bodyParser = require("body-parser");
const express = require('express');

const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');


app.use(expressLayouts);
app.set('view engine', 'ejs');


//IMport form router module
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
//don't need
app.use(express.static(path.join(__dirname, 'public')));



///for route
app.use('/admin', adminRoute);
app.use('/', shopRoute);
//if error it show 404.ejs
app.use((req, res, next) => {
    res.render('404', {
        pageTitle: 'Pagenotfound',
        path: ''

    });


});
app.listen(9000);
