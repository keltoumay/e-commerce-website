const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Assuming Product is your model
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create a new product (updated function to handle file upload)
exports.createProduct = async (req, res) => {
  const { name, description, price, category, stock } = req.body;
  const image = req.file ? req.file.path : ''; // Handle file upload

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      image, // Save image path
      category,
      stock,
    });

    const product = await newProduct.save();
    res.status(201).json(product); // 201 Created
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  const { name, description, price, category, stock } = req.body;
  const image = req.file ? req.file.path : ''; // Handle file upload if updated

  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    // Update product fields
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.image = image || product.image; // Update image if provided
    product.category = category || product.category;
    product.stock = stock || product.stock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    await product.remove();
    res.json({ msg: 'Product removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
