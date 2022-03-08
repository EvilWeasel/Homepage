const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


router.get('/', (req, res) => {
  res.render('index', { title: 'Express'});
});

module.exports = router;