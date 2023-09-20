"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {validateTokenMiddleware} from "../middlwares/middlWareAuth2"
const authentication_1 = require("../controllers/authentication");
exports.default = (router) => {
    // router.post("/auth/register", validateRequest({ schema: registrationSchema, requestPart: 'body' }), registerUser);
    // router.post("/auth/login", validateRequest({ schema: loginSchema, requestPart: 'body' }), loginUser);
    router.post("/auth/register", authentication_1.registerUser);
    router.post("/auth/login", authentication_1.loginUser);
    router.post("/auth/logout", authentication_1.logoutUser);
};
//# sourceMappingURL=authentication.js.map