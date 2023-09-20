import express from "express";
import authentication from "./authentication";
import users from "./users";
import tasksRouter from "./tasksRouter";

const router = express.Router();

export default (): express.Router => {
  authentication(router);

  users(router);

  tasksRouter(router);
  return router;
};
