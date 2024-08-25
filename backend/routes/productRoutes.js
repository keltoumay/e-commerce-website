const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');
const Product = require('../models/Product');

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', ProductController.getAllProducts);

// @route   GET api/products/:id
// @desc    Get product by ID
// @access  Public
router.get('/:id', getProductById);

// @route   POST api/products
// @desc    Create a product
// @access  Private/Admin
router.post('/', authMiddleware, createProduct);

// @route   PUT api/products/:id
// @desc    Update a product
// @access  Private/Admin
router.put('/:id', authMiddleware, updateProduct);

// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Private/Admin
router.delete('/:id', authMiddleware, deleteProduct);


// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ storage });
  
  // POST /api/products - Upload a new product
  router.post('/', upload.single('image'), async (req, res) => {
    const { name, description, price } = req.body;
    const image = req.file ? req.file.path : '';
  
    try {
      const product = new Product({
        name,
        description,
        price,
        image,
      });
  
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      console.error('Error uploading product:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
module.exports = router;