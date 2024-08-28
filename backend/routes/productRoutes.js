const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const productController = require('../controllers/productController');
=======
const ProductController = require('../controllers/ProductController');
>>>>>>> c71856280819a70cdfa540375867995355d3fa81
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', productController.getAllProducts);

// @route   GET api/products/:id
// @desc    Get product by ID
// @access  Public
router.get('/:id', productController.getProductById);

// @route   POST api/products
// @desc    Create a product
// @access  Private/Admin
router.post('/', authMiddleware, productController.createProduct);

// @route   PUT api/products/:id
// @desc    Update a product
// @access  Private/Admin
router.put('/:id', authMiddleware, productController.updateProduct);

// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Private/Admin
router.delete('/:id', authMiddleware, productController.deleteProduct);

module.exports = router;
