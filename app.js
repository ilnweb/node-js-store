const express = require('express');
const adminRouts = require('./routes/admin');
const shopRouts = require('./routes/shop');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRouts);
app.use(shopRouts);


app.use((req, res, next) => {
  res.status(404).render('404',{pageTitle:'Page Not Found'});
})

app.listen(3000);
