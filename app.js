const express = require('express');
const adminRouts = require('./routes/admin');
const shopRouts = require('./routes/shop');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin',adminRouts);
app.use(shopRouts);


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);
