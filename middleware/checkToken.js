const jwt = require('jsonwebtoken');
const config = require('config')

const checkToken = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        console.log(config.get("jwtSecret"));
        console.log(token);
        const decoded = jwt.verify(token, config.get("jwtSecret"));

        req.user = decoded;
        console.log(req.user.id);

        next();
    } catch (err) {
        return res.status(401).json({ msg: 'Invalid or expired token' });
    }
};

module.exports = checkToken;