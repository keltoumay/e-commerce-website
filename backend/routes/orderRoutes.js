const express = require('express');
const router = express.Router();
const { createOrder, getOrders, getOrderById, updateOrderToPaid, updateOrderToDelivered } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST api/orders
// @desc    Create new order
// @access  Private
router.post('/', authMiddleware, createOrder);

// @route   GET api/orders
// @desc    Get all orders for a user
// @access  Private
router.get('/', authMiddleware, getOrders);

// @route   GET api/orders/:id
// @desc    Get order by ID
// @access  Private
router.get('/:id', authMiddleware, getOrderById);

// @route   PUT api/orders/:id/pay
// @desc    Update order to paid
// @access  Private
router.put('/:id/pay', authMiddleware, updateOrderToPaid);

// @route   PUT api/orders/:id/deliver
// @desc    Update order to delivered
// @access  Private/Admin
router.put('/:id/deliver', authMiddleware, updateOrderToDelivered);

module.exports = router;
