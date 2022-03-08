const express = require('express');
const app = express();
const indexRouter = require('./routes/r_index');

// set-up routes
app.use('/', indexRouter);

// setup pug as a view engine for express
app.set('view engine', 'pug');

app.listen(9999);