const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-token').replace('Bearer ', ''); // Notice the space after 'Bearer'
    if (!token) {
        return res.status(401).json({
            msg: 'No token, access denied',
            success: false
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded // Assuming your token contains `userId`
        next();

    } catch (error) {
        return res.status(400).json({
            msg: 'Invalid token',
            success: false
        });
    }
};
