const messages = {
    user: {
        title: 'Usuarios',
        created: 'Usuario creado con éxito',
        failed: 'No se pudo registrar el usuario, intente de nuevo',
        updated: 'Usuario actualizado con éxito',
        deleted: 'Usuario eliminado con éxito',
    },
    product: {
        title: 'Productos',
        created: 'Producto creado con éxito',
        updated: 'Producto actualizado con éxito',
        deleted: 'Producto eliminado con éxito',
    },
    register: {
        title: 'Registro',
        success: 'Usuario registrado con éxito',
        failed: 'No se pudo registrar el usuario, intente de nuevo',
        form: {
            name: 'Nombre',
            email: 'Correo',
            password: 'Contraseña',
            submit: 'Guardar',
        },
        already: '¿Ya tiene una cuenta?',
    },
    login: {
        title: 'Ingresar',
        success: 'Usuario autenticado con éxito',
        failed: 'No se pudo autenticar el usuario, intente de nuevo',
        form: {
            email: 'Correo',
            password: 'Contraseña',
            submit: 'Ingresar',
        },
        notyet: '¿No tiene una cuenta?',
    },
}
export default messages;