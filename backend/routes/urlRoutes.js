const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

// POST route to shorten URL
router.post('/shorten', urlController.shortenUrl);

// GET route to redirect short URL
router.get('/:shortCode', urlController.redirectUrl);

module.exports = router;
