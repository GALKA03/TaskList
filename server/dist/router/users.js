"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../controllers/users");
const authMiddlware_1 = require("../middlwares/authMiddlware");
exports.default = (router) => {
    router.get("/users", authMiddlware_1.authenticateToken, users_1.getAllUsers);
    router.get("/users/:id", users_1.getUserId);
    router.delete("/users/:id", users_1.deleteUser);
    router.patch("/users/:id", users_1.updateUser);
};
//# sourceMappingURL=users.js.map