const express = require("express");

// vamos crear un objeto router para poder definir rutas
const router  = express.Router();

//importar el controlador que creamos en task.controller.js
const {getAlltasks} = require("../controllers/task.controller");

router.get("/tasks",getAlltasks);

//vamos a expportar eto para que se use en app.js

module.exports = router;
