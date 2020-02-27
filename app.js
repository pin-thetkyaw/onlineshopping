const bodyParser = require("body-parser");
const express = require('express');

const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
// import from models
const User = require('./models/user')


app.use(bodyParser.urlencoded({ extended: false }))

app.use(expressLayouts);
app.set('view engine', 'ejs');


//IMport form router module
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
//Import from util
const mongoConnect = require('./util/database').mongoConnect;

//for user model
app.use((req, res, next) => {
    User.findById("5e53771e1c9d440000bb94f7")
        .then(user => {
            // console.log(user)
            req.user = new User(user.name, user.email, user.cart, user._id);

            next();


        })
        .catch(err => {
            console.log(err)
        })



})



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

mongoConnect(() => {
    app.listen(3000);
})

