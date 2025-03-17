// Importa las librerías necesarias
const { Sequelize } = require("sequelize");
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
    // nombra la base de datos, usuario y contraseña 
  process.env.DB_NAME,      
  process.env.DB_USER,      
  process.env.DB_PASSWORD,  
  {
    //configura el motor de la base de datos, puertos, horario etc.
    host: process.env.DB_HOST, 
    dialect: 'postgres', 
    port: process.env.DB_PORT, 
    logging: false,           
    timezone: '-05:00'         
  }
);

// se exporta la instancia de sequelize para ser utilizada en otros archivos.
module.exports = sequelize;
