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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.logoutUser = exports.loginUser = void 0;
const authServices_1 = require("../services/authServices");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_email, user_password } = req.body;
        console.log(req.body);
        const result = yield (0, authServices_1.loginUserService)(user_email, user_password);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ message: "Login failed", error: error.message });
    }
});
exports.loginUser = loginUser;
const logoutUser = (req, res) => {
    var _a;
    try {
        const token = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (token) {
            (0, authServices_1.logoutUserService)(token);
            res.status(200).json({ message: "Logged out successfully" });
        }
        else {
            throw new Error("Token not provided");
        }
    }
    catch (error) {
        res.status(400).json({ message: "Logout failed", error: error.message });
    }
};
exports.logoutUser = logoutUser;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const createdUser = yield (0, authServices_1.registerService)(userData);
        const _a = createdUser.dataValues, { user_password } = _a, userResponse = __rest(_a, ["user_password"]);
        res
            .status(201)
            .json({ message: "User registered successfully", user: userResponse });
    }
    catch (error) {
        res
            .status(400)
            .json({ message: "Registration failed", error: error.message });
    }
});
exports.registerUser = registerUser;
//# sourceMappingURL=authentication.js.map