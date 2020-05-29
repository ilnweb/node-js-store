const express = require('express');
const adminRouts = require('./routes/admin');
const shopRouts = require('./routes/shop');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin',adminRouts);
app.use(shopRouts);


app.use((req, res, next) => {
  res.status(404).send('<h1>Page not Found</h1>');
})

app.listen(3000);
