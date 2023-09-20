"use strict";
// services/jwtService.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAndVerifyToken = exports.isTokenBlacklisted = exports.blacklistToken = exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'; // Always keep your secret key out of the codebase.
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign(user, SECRET_KEY, { expiresIn: '1h' }); // token expires in 1 hour
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, SECRET_KEY);
};
exports.verifyToken = verifyToken;
// services/jwtService.ts
let tokenBlacklist = [];
const blacklistToken = (token) => {
    tokenBlacklist.push(token);
};
exports.blacklistToken = blacklistToken;
const isTokenBlacklisted = (token) => {
    return tokenBlacklist.includes(token);
};
exports.isTokenBlacklisted = isTokenBlacklisted;
const validateAndVerifyToken = (token) => {
    if ((0, exports.isTokenBlacklisted)(token)) {
        throw new Error('This token is blacklisted.');
    }
    return (0, exports.verifyToken)(token);
};
exports.validateAndVerifyToken = validateAndVerifyToken;
//# sourceMappingURL=jwtServices.js.map