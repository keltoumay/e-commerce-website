const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');
const Product = require('../models/Product');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder to store uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Generate unique filenames
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', ProductController.getAllProducts);

// @route   GET api/products/:id
// @desc    Get product by ID
// @access  Public
router.get('/:id', ProductController.getProductById);

// @route   POST api/products
// @desc    Create a product
// @access  Private/Admin
router.post('/', authMiddleware, upload.single('image'), ProductController.createProduct);

// @route   PUT api/products/:id
// @desc    Update a product
// @access  Private/Admin
router.put('/:id', authMiddleware, ProductController.updateProduct);

// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Private/Admin
router.delete('/:id', authMiddleware, ProductController.deleteProduct);

module.exports = router;