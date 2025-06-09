// cargar variables de entorno delarchivo .env
require('dotenv').config();
// vamos a importar el modeulo de postgreSQL
const {Pool} = require('pg');

// vamos a crear una instacion de pool con las variable de entrono .env
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// vamos a exportar el pool que creamos para usarlo con otros archivos

module.exports= pool;