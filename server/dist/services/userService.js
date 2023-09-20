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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.deleteUserById = exports.getUserById = exports.getAllUsersService = void 0;
// import  UserModel  from '../models/userModel'; // import your Sequelize user model
const userModel_1 = __importDefault(require("../models/userModel"));
const getAllUsersService = () => userModel_1.default.findAll();
exports.getAllUsersService = getAllUsersService;
const getUserById = (id) => userModel_1.default.findByPk(id);
exports.getUserById = getUserById;
const deleteUserById = (id) => userModel_1.default.destroy({
    where: { id },
});
exports.deleteUserById = deleteUserById;
const updateUserById = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findByPk(id);
    if (!user)
        return null;
    const updatedUser = yield user.update(updateData);
    return updatedUser;
});
exports.updateUserById = updateUserById;
//# sourceMappingURL=userService.js.map