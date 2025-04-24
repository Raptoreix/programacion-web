// Importa las dependencias necesarias
const sequelize = require('./config/db'); // Conexión a la base de datos 
const app = require('./app'); // Aplicacion Express
const dotenv = require('dotenv'); // Para cargar variables de entorno
require('./models/associations'); // Importa las relaciones entre modelos

// Carga las variables de entorno env.
dotenv.config();

// Define el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Verifica la conexión a la base de datos PostgreSQL
sequelize.authenticate()
    .then(() => {
        console.log('Conectado a PostgreSQL con Sequelize'); // Mensaje de éxito al conectarse.
        // Inicia el servidor Express una vez que la conexión a la base de datos es exitosa.
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`); // Mensaje de inicio del servidor.
        });
    })
    .catch(err => console.error('Error conectando a la base de datos:', err)); // Manejo de errores de conexión.

// Sincroniza los modelos con la base de datos (sin forzar la eliminación de tablas existentes).
sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de datos sincronizada'); // Mensaje de éxito al sincronizar.
    })
    .catch(err => {
        console.error('Error al sincronizar la base de datos:', err); // Manejo de errores de sincronización.
    });