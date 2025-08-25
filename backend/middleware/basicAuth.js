// backend/middleware/basicAuth.js
module.exports = function basicAuth(req, res, next) {
  // Get the Authorization header
  const auth = req.headers.authorization;

  // If no auth header or it doesn't start with 'Basic ', challenge the user
  if (!auth || !auth.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic');
    return res.status(401).send('Authentication required.');
  }

  // Decode base64 credentials
  const base64Credentials = auth.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  // Compare against environment variables
  const adminUser = process.env.ADMIN_USERNAME;
  const adminPass = process.env.ADMIN_PASSWORD;

  if (username === adminUser && password === adminPass) {
    next(); // Auth success, proceed to real handler
  } else {
    res.setHeader('WWW-Authenticate', 'Basic');
    res.status(401).send('Access denied.');
  }
};
