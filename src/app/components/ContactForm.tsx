import React, { useState } from 'react';
import style from '../styles/ContactForm.module.css';
import validate from '../utils/validator';
import { toast } from 'react-hot-toast';


const ContactForm = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [formErrors, setFormErrors] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        setFormErrors({ ...formErrors, [name]: '' });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors = validate(formData);
        setFormErrors(errors);
      
        if (errors.nombre || errors.email || errors.mensaje) {
            return;
        }
        toast.success('Formulario enviado exitosamente!');

        setFormData({
            nombre: '',
            email: '',
            mensaje: ''
        });
    };

    return (
        <form className={style.container} onSubmit={handleSubmit} method='POST'>
            <h1 className={style.title}>Mensaje</h1>
            <div className={style.subContainer}>
                <input
                    className={style.input}
                    type="text"
                    placeholder='Nombre'
                    name='nombre'
                    value={formData.nombre}
                    onChange={handleChange}
                />
                {formErrors.nombre && <p className={style.error}>{formErrors.nombre}</p>}

                <input
                    className={style.input}
                    type="text"
                    placeholder='Email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                {formErrors.email && <p className={style.error}>{formErrors.email}</p>}

                <textarea
                    className={style.textarea}
                    placeholder='Mensaje...'
                    name='mensaje'
                    value={formData.mensaje}
                    onChange={handleChange}
                />
                {formErrors.mensaje && <p className={style.error}>{formErrors.mensaje}</p>}
            </div>
            <button className={style.send} type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;
