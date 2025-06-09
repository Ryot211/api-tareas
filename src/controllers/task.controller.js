const pool = require("../models/db");

//creamos una funcion asyncrona para obtener todas las tareas
const getAlltasks = async (req, res)=> {
    try{
        // ejecutamos una consulta para obtener los regustro si esque existen de la tabla tareas "tareas"
        const result = await pool.query("Select * from tasks")

        // si vale esto, devuelve un jscon con datos al cliente
        res.json(result.rows);
    }catch(error){
        console.error("error al obtener tares", error);
        // devolvemos un mensaje de error 500 que error interno del server
        res.status(500).json({error: "Error interno del servidor"});
    }
};

module.exports= {
    getAlltasks
};