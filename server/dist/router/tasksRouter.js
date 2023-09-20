"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("../controllers/tasks");
// import { authenticateToken } from "../middlwares/authMiddlware";
exports.default = (router) => {
    router.post("/tasks/", tasks_1.createNewTask);
    router.get("/tasks/", tasks_1.getTasks);
    router.get("/tasks/:id", tasks_1.getTaskId);
    router.delete("/tasks/:id", tasks_1.deleteTask);
    router.put("/tasks/:id", tasks_1.updateTask);
};
//# sourceMappingURL=tasksRouter.js.map