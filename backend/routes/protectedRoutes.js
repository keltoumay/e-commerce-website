const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Protected route
router.post('/protected', authMiddleware, (req, res) => {
  res.json({ msg: 'This is a protected route' });
});

module.exports = router;
