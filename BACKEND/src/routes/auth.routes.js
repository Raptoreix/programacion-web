// Importa las dependencias necesarias
const express = require('express');
// Crea un enrutador de Express
const router = express.Router();
// Importa el controlador de autenticación
const authController = require('../controllers/auth.controller');

// Define la ruta POST para el inicio de sesión
router.post('/login', authController.login);
// Define la ruta POST para el registro de usuarios
router.post('/register', authController.register);

// Exporta el enrutador
module.exports = router;