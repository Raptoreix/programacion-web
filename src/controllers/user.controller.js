const userService = require('../services/user.service');

// Controlador para manejar la creacion de un usuario.
exports.createUser = async (requestAnimationFrame, res) => {
    try {
        // Extrae los datos del cuerpo de la solicitud, nombre, email, password, rol_id, administrador_id
        const { nombre, email, password, rol_id, administrador_id } = requestAnimationFrame.body;

        // Llama al metodo createUser del servicio de usuario para crear un nuevo usuario en la base de datos
        const newUser = await userService.createUser(nombre, email, password, rol_id, administrador_id);

        // Si es exitoso, responde con un mensaje y los datos del usuario creado.
        res.status(201).json({ message: 'Usuario creado con exito', user: newUser });

    } catch (err) {
        // Si hay un error, responde con un mensaje de error y código 500.
        res.status(500).json({ message: err.message });
    }
};