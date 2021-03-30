const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/').post((req, res) => {
    const { body } = req;
    console.log(req.body);
    let { name, price } = body;

    

    const newProduct = new Product({
        name: name, price: price
    });

    newProduct.save()
        .then(() => res.status(200).json(newProduct))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
