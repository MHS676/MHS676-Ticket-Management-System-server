const jwt = require('jsonwebtoken');


const isAuthenticated = (req, res, next) => {
  // Check if Authorization header exists
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  // Split "Bearer" and the token
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Access denied. Token format is invalid.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request object
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Access denied. Invalid or expired token.' });
  }
};

module.exports = isAuthenticated;


const isAdmin = (req, res, next) => {
  isAuthenticated(req, res, () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    next();
  });
};


module.exports = { isAuthenticated, isAdmin };
