const pool = require("../models/db");

//creamos una funcion asyncrona para obtener todas las tareas
const getAlltasks = async (req, res)=> {
    try{
        // ejecutamos una consulta para obtener los regustro si esque existen de la tabla tareas "tareas"
        const result = await pool.query("Select * from tasks")

        // si vale esto, devuelve un jscon con datos al cliente
        res.json(result.rows);
    }catch(error){
        console.error("error al obtener tareas", error);
        // devolvemos un mensaje de error 500 que error interno del server
        res.status(500).json({error: "Error interno del servidor"});
    }
};

const createTask = async(req,res)=>{
    try{
        const {id_tasks,title_tasks,description_tasks,createat_tasks,duedate_tasks,fk_user_id,fk_status_id}=req.body;
        if(!id_tasks || !title_tasks || !description_tasks || !createat_tasks || !duedate_tasks || !fk_user_id || !fk_status_id){
            return res.status(400).json({error: "Faltan datos obligatorios"});
        }
        await pool.query("Insert into tasks(id_tasks,title_tasks,description_tasks,createat_tasks,duedate_tasks,fk_user_id,fk_status_id)values($1,$2,$3,$4,$5,$6,$7)",[id_tasks,title_tasks,description_tasks,createat_tasks,duedate_tasks,fk_user_id,fk_status_id]);
        res.status(201).json({act:"Tarea creada con exito!!"});
    }catch(error){

        console.error("error al insertar una tarea",error);
        res.status(500).json({error:"Error interno del servidor"});

    }
}

const getTaskByID = async(req,res)=>{
    try{
         const {id_tasks}=req.params;
         if(!id_tasks){
            return res.status(400).json({error: "Faltan el ID de la tarea"});  
        }
        const result = await pool.query("Select * from tasks where id_tasks = $1 ",[id_tasks]);

        if(result.rows.length === 0){
            return res.status(404).json({error:"tarea no encontrada"});
        }

        res.json(result.rows);
    }catch(error){
        console.error("error al seleccionar la tarea",error);
        res.status(500).json({error:"Error interno del servidor"});

    } 
}

const deleteTasksByID = async(req,res)=>{
    try{
        const{id_tasks}=req.params;
         if(!id_tasks){
            return res.status(400).json({error: "Faltan el ID de la tarea"});  
        }
        const result = await pool.query("DELETE FROM tasks WHERE id_tasks = $1",[id_tasks]);
         if(result.rowCount === 0){
            return res.status(404).json({error:"tarea no encontrada"});
        }
        res.status(201).json({act:"Tarea eliminada con exito!!"});
    }catch(error){
        console.error("Error al eliminar la tarea",error);
        res.status(500).json({error:"Error interno del servidor"});
    }
}

const updateTaskId = async(req,res)=>{
    try{
        const {id_tasks} = req.params
        const {title_tasks,description_tasks,duedate_tasks,fk_status_id}=req.body;
        if(!id_tasks){
            return res.status(400).json({error: "Faltan el ID de la tarea"});  
        }
        await pool.query(
            "UPDATE tasks SET title_tasks= $1, description_tasks=$2,duedate_tasks=$3,fk_status_id=$4 WHERE id_tasks=$5",
            [title_tasks,description_tasks,duedate_tasks,fk_status_id,id_tasks])
        res.status(201).json({act:"Tarea Actualizada con exito"});

    }catch(error){
        console.error("Error al actualizar la tarea",error);
        res.status(500).json({error:"Error interno del servidor"});
    }
}


module.exports= {
    getAlltasks,
    createTask,
    getTaskByID,
    deleteTasksByID,
    updateTaskId
};