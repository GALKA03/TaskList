"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jwtServices_1 = require("../utils/jwtServices");
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token)
        return res.sendStatus(401); // if there isn't any token
    if ((0, jwtServices_1.isTokenBlacklisted)(token))
        return res.sendStatus(401); // if token is blacklisted
    try {
        const user = (0, jwtServices_1.verifyToken)(token);
        req.user = user; // save user in request for use in other routes
        next();
    }
    catch (err) {
        return res.sendStatus(403); // if token is invalid
    }
};
exports.authenticateToken = authenticateToken;
//# sourceMappingURL=authMiddlware.js.map