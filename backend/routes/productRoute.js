const express = require('express');
const productControllers = require('../controllers/productController');

const router = express.Router();

router.route("/products").get(productControllers.getAllProducts);
router.route("/products/new").post(productControllers.createProduct);


module.exports = router;