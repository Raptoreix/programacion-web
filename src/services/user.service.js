const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

// Funcion para crear un nuevo usuario.
exports.createUser = async (nombre, email, password, rol_id, administrador_id) => {
    try {
        // Verifica si ya existe un usuario con el mismo correo electronico.
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            throw new Error('El usuario ya existe'); // Lanza un error si el usuario existe
        }

        // Encripta la contraseña utilizando bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crea un nuevo usuario en la base de datos con los datos proporcionados
        const newUser = await User.create({
            nombre,
            email,
            password: hashedPassword, // Guarda la contraseña encriptada
            rol_id,
            administrador_id
        });

        return newUser; // Retorna el usuario recién creado

    } catch (err) {
        // Lanza un error con un mensaje descriptivo en caso de fallo.
        throw new Error(`Error al crear el usuario: ${err.message}`);
    }
};