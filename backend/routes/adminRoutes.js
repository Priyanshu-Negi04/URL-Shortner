// const express = require('express');
// const router = express.Router();
// const basicAuth = require('../middleware/basicAuth');
// const urlController = require('../controllers/urlController');

// router.use(basicAuth);  

// router.get('/urls', urlController.getAllUrls);

// module.exports = router;


const express = require('express');
const router = express.Router();
const basicAuth = require('../middleware/basicAuth');
const urlController = require('../controllers/urlController');

// NEW: Login endpoint (no basicAuth middleware)
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const adminUser = process.env.ADMIN_USERNAME;
  const adminPass = process.env.ADMIN_PASSWORD;
  
  if (username === adminUser && password === adminPass) {
    return res.json({ 
      success: true, 
      message: 'Login successful'
    });
  } else {
    return res.status(401).json({ 
      success: false, 
      message: 'Invalid credentials' 
    });
  }
});

// Existing protected route (keep this as is)
router.use(basicAuth);  // Protect all routes below this line
router.get('/urls', urlController.getAllUrls);

module.exports = router;
