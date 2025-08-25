const express = require('express');
const router = express.Router();
const basicAuth = require('../middleware/basicAuth');
const urlController = require('../controllers/urlController');

router.use(basicAuth);  // Protect all admin routes

router.get('/urls', urlController.getAllUrls);

module.exports = router;
