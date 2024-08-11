const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, totalPrice } = req.body;

  try {
    const order = new Order({
      user: req.user.id,
      orderItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all orders for a user
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update order to paid
exports.updateOrderToPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update order to delivered
exports.updateOrderToDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
