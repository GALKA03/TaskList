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
exports.updateUser = exports.deleteUser = exports.getUserId = exports.getAllUsers = void 0;
const userService_1 = require("../services/userService");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getAllUsersService)();
        return res.json(users);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to fetch users." });
    }
});
exports.getAllUsers = getAllUsers;
const getUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, userService_1.getUserById)(id);
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }
        return res.json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to fetch user." });
    }
});
exports.getUserId = getUserId;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedUser = yield (0, userService_1.deleteUserById)(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found." });
        }
        return res.json({ message: "User deleted successfully." });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to delete user." });
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { username } = req.body;
        if (!username) {
            return res.status(400).json({ error: "Username is required." });
        }
        const updatedUser = yield (0, userService_1.updateUserById)(id, { username });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found." });
        }
        return res.json(updatedUser);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to update user." });
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=users.js.map