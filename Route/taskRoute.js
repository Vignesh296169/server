const express = require("express");
// const { find } = require("../models/Task");
const{initial,remove,update,write}=require("../controller/taskController")
const route = express.Router();

// const Task = require("../models/Task");

route.get("/task",initial);
route.post("/task", write);
route.delete("/task/:id",remove);
route.put("/task/:id",update)

module.exports = route;
