// Importa el servicio de autenticación que contiene la lógica para iniciar sesión
const authService = require('../services/auth.service');

// Controlador para manejar el inicio de sesion
exports.login = async (req, res) => {
    const { email, password } = req.body; // Extrae el email y contraseña del cuerpo de la solicitud

    try {
        // Llama al metodo loginUser del servicio de autenticación para validar credenciales y generar un token
        const token = await authService.loginUser(email, password);

        // Si es exitoso, responde con un mensaje y el token generado
        res.status(200).json({ message: 'Inicio de sesion exitoso', token });

    } catch (err) {
        // Si hay un error, responde con un mensaje de error y codigo 400.
        res.status(400).json({ message: err.message });
    }
};