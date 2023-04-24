// routes/admin.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.status(201).json({ message: 'Admin created' });
  } catch (error) {
    res.status(400).json({ error: 'Admin creation failed' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    const isMatch = await admin.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, 'your_jwt_secret', { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Admin login failed' });
  }
});

module.exports = router
