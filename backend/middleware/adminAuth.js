
const jwt = require('jsonwebtoken');

const adminAuth = async (req, res, next) => {
    try {
        const token = req.headers.token;

        if (!token) {
            console.log("No token provided");
            return res.json({ success: false, message: "not authorized" });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", token_decode);

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            console.log("Token does not match admin credentials");
            return res.json({ success: false, message: "not authorized" });
        }

        console.log("Admin authorized");
        next();
    } catch (error) {
        console.log("JWT verification error:", error);
        return res.json({ success: false, message: error.message });
    }
};

module.exports = adminAuth;
