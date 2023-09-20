"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("../controllers/authentication");
const validateJoi_1 = __importDefault(require("../middlwares/validateJoi"));
const validateAuth_1 = require("../utils/validateAuth");
exports.default = (router) => {
    router.post("/auth/register", (0, validateJoi_1.default)({ schema: validateAuth_1.registrationSchema, requestPart: 'body' }), authentication_1.registerUser);
    router.post("/auth/login", (0, validateJoi_1.default)({ schema: validateAuth_1.loginSchema, requestPart: 'body' }), authentication_1.loginUser);
    //  router.post("/auth/register", registerUser);
    //  router.post("/auth/login", loginUser);
    router.post("/auth/logout", authentication_1.logoutUser);
};
//# sourceMappingURL=authentication.js.map