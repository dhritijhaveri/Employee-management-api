const { verifyToken } = require('../Controllers/controller');

const authenticateJWT = (req, res, next) =>
{
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).json({error: 'Access denied'});

    try
    {
        const decoded = verifyToken(token);

        req.user = decoded;
        next();
    }

    catch(err)
    {
        res.status(401).json({error: 'Invalid token '});
    }
};

module.exports = { authenticateJWT };