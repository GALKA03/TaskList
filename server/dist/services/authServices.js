"use strict";
// services/authService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerService = exports.logoutUserService = exports.loginUserService = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const jwtServices_1 = require("../utils/jwtServices");
const loginUserService = (user_email, user_password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findOne({ where: { user_email } });
    if (!user)
        throw new Error("User not found");
    const isMatch = yield user.verifyPassword(user_password);
    if (!isMatch)
        throw new Error("Invalid credentials");
    const token = (0, jwtServices_1.generateToken)({ userId: user.user_id, userEmail: user.user_email });
    return {
        token,
        user_name: user.user_name,
        user_email: user.user_email
    };
});
exports.loginUserService = loginUserService;
const logoutUserService = (token) => {
    // If you have a mechanism to blacklist tokens, do it here.
    (0, jwtServices_1.blacklistToken)(token);
};
exports.logoutUserService = logoutUserService;
const registerService = (data) => userModel_1.default.create(data);
exports.registerService = registerService;
//# sourceMappingURL=authServices.js.map