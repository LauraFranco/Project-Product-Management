const express = require('express');
const router = express.Router();
const products = require('./../controllers/products');

router.get('/', products.all)
    .get('/:id', products.getOneById)
    .post('/', products.create)
    .put('/:id', products.update)
    .delete('/:id', products.delete)

module.exports = router;
