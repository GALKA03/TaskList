"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHandler = void 0;
const jwtServices_1 = require("./jwtServices");
const validateHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorizationHeader = req.headers['authorization'];
        if (!authorizationHeader) {
            throw new Error('Authorization header not provided');
        }
        // Bearer <token>
        const token = authorizationHeader.split(' ')[1]; // Extracting token from Bearer
        if (!token) {
            throw new Error('Token not provided');
        }
        const decodedToken = (0, jwtServices_1.validateAndVerifyToken)(token);
        if (!decodedToken.userId || !decodedToken.userEmail) {
            throw new Error('Invalid token contents');
        }
        res.status(200).json({ message: 'Token is valid', user: decodedToken });
    }
    catch (error) {
        res.status(401).json({ message: 'Authentication failed', error: error.message });
    }
});
exports.validateHandler = validateHandler;
//# sourceMappingURL=validateToken.js.map