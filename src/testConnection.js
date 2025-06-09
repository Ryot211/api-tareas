const pool = require("./models/db")


async function testConnection() {
    pool.query("Select NOW()");
    const result = await pool.query("SELECT NOW()");

    try{
        console.log("Conectado a la base de datos",result.rows[0].now);
    }catch(error){

        console.error("Error de conexion",error.message);

    }
    
}

testConnection();