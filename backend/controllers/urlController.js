const Url = require('../models/Url');
const crypto = require('crypto');

// Helper function to generate a random alphanumeric short code
function generateShortCode(length = 6) {
  return crypto.randomBytes(length).toString('base64url').slice(0, length);
}

// POST /api/shorten - Create short URL
exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;

  // Basic URL validation
  try {
    new URL(originalUrl);
  } catch (error) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  try {
    // Check if originalUrl already exists in DB
    let url = await Url.findOne({ originalUrl });
    if (url) {
      return res.json({ shortCode: url.shortCode });
    }

    // Generate a unique shortCode
    let shortCode;
    let exists;
    do {
      shortCode = generateShortCode();
      exists = await Url.findOne({ shortCode });
    } while (exists);

    // Save new URL document
    url = new Url({ originalUrl, shortCode });
    await url.save();

    res.json({ shortCode });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /:shortCode - Redirect to original URL
exports.redirectUrl = async (req, res) => {
  const { shortCode } = req.params;

  try {
    const url = await Url.findOne({ shortCode });
    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }

    // Increment click count
    url.clicks++;
    await url.save();

    // Redirect to original URL
    res.redirect(url.originalUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
