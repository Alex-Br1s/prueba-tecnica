const validate = (formData) => {
    const errors = {};

    if (formData.nombre.trim() === '') {
        errors.nombre = 'Por favor ingresa tu nombre';
    }

    if (formData.email.trim() === '') {
        errors.email = 'Por favor ingresa tu correo electrónico';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Por favor ingresa un correo electrónico válido';
    }

    if (formData.mensaje.trim() === '') {
        errors.mensaje = 'Por favor ingresa un mensaje';
    }

    return errors;
};

export default validate;
