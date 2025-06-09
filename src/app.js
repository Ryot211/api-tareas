const express = require("express");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/task.routes");

// ejecutamos dotenv
dotenv.config();
// creamos app de express
const app= express();
// usamos use, para que express entienda los datos que viene en el json
app.use(express.json());
// express va usar la ruta que esta en taskRoutes, usamos en profijo /api
app.use("/api",taskRoutes);
//definimos el puerto desde env. o sino le asignamos el 3000 que es el por defecto

const PORT= process.env.PORT || 3000;
//inciar el servidor

app.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo por el puerto ${PORT}`);
});

