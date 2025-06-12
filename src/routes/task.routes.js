const express = require("express");

// vamos crear un objeto router para poder definir rutas
const router  = express.Router();

//importar el controlador que creamos en task.controller.js
const {getAlltasks} = require("../controllers/task.controller");
//metodo post
const {createTask} = require("../controllers/task.controller");
// metodo get por id
const {getTaskByID} = require("../controllers/task.controller");
// metodo delete por id 
const {deleteTasksByID} = require("../controllers/task.controller");
// metodo actualizar por id
const {updateTaskId} = require("../controllers/task.controller");

router.get("/tasks",getAlltasks);
//metodo post
router.post("/tasks",createTask);
// metodo get por id
router.get("/tasks/:id_tasks",getTaskByID);
//metodo eliminar por id 
router.delete("/tasks/:id_tasks",deleteTasksByID);
// metodo actualizar por id 
router.put("/tasks/:id_tasks",updateTaskId);

//vamos a expportar eto para que se use en app.js

module.exports = router;
