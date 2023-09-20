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
exports.updateTask = exports.deleteTask = exports.getTaskId = exports.getTasks = exports.createNewTask = void 0;
const tasksModel_1 = __importDefault(require("../models/tasksModel"));
const createNewTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, text, status } = req.body;
        if (!title || !text) {
            return res.status(400).json({ error: 'Both title and text are required.' });
        }
        const newTask = yield tasksModel_1.default.create({ title, text, status });
        return res.status(201).json(newTask);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createNewTask = createNewTask;
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield tasksModel_1.default.findAll();
        return res.status(200).json(tasks);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
});
exports.getTasks = getTasks;
const getTaskId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const task = yield tasksModel_1.default.findByPk(id);
        if (!task)
            return res.status(404).json({ error: 'Task not found' });
        return res.json(task);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
});
exports.getTaskId = getTaskId;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield tasksModel_1.default.destroy({ where: { id } });
        return res.json({ message: 'Task deleted successfully' });
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
});
exports.deleteTask = deleteTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { title, text } = req.body;
        const task = yield tasksModel_1.default.findByPk(id);
        if (!task)
            return res.status(404).json({ error: 'Task not found' });
        task.title = title;
        task.text = text;
        yield task.save();
        return res.status(200).json(task);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.updateTask = updateTask;
//# sourceMappingURL=tasks.js.map