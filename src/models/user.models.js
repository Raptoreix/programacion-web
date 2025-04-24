const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define el modelo uusuarios en la base de datos
const User = sequelize.define('usuarios', {
    id: { 
        type: DataTypes.INTEGER,          
        primaryKey: true,                 
        autoIncrement: true               
    },
    nombre: { 
        type: DataTypes.STRING,           
        allowNull: false                  
    },
    email: { 
        type: DataTypes.STRING,           
        allowNull: false,                 
        unique: true                      
    },
    password: { 
        type: DataTypes.STRING,           
        allowNull: false                  
    },
    rol_id: {
        type: DataTypes.INTEGER,          
        allowNull: false,                 
        references: { // Clave foranea
            model: 'roles',// Referencia a la tabla roles
            key: 'id' // Referencia a la columna id
        }
    },
    administrador_id: {
        type: DataTypes.INTEGER,          
        allowNull: true,                  
        references: { // Clave foraanea
            model: 'usuarios', // Referencia recursiva a la tabla usuarios
            key: 'id' // Referencia a la columna id
        }
    }
}, {
    timestamps: false,                    
    tableName: 'usuarios'// asigna el nombre exacto de la tabla en la base de datos
});

// Exporta el modelo para ser utilizado en otros archivos
module.exports = User;