import '../styles/App.scss';
import '../styles/Form.scss';
import React, { useState } from 'react';

function Form({ inputTask, setInputTask, alert, setAlert, tasksList, setTasksList }) {

    // Función manejadora de los cambios en el input de texto
    const handleInputTask = (ev) => {
        setInputTask(ev.target.value);
    }

    // Función manejadora del botón de "agregar tarea"
    const handleBtnNewTask = (ev) => {
        ev.preventDefault();
        if (inputTask.trim().length === 0) {
            setAlert('El texto no puede estar vacío');
        } else if (inputTask.trim().length > 20) {
            setAlert('El texto no puede tener más de 20 caracteres');
        } else {
            setTasksList([...tasksList, inputTask]);
            setInputTask('');
            setAlert('');
        }
    }

    return (
        <>
            <form className='form'>
                <input
                    className='form__input'
                    value={inputTask}
                    onChange={handleInputTask}
                    type='text'
                    placeholder='Añade aquí tu tarea'
                >
                </input>
                <button className='form__button' onClick={handleBtnNewTask}>+</button>
            </form>

            <div className='container-alert'>
                <p className='alert-message'>{alert}</p>
            </div>

        </>
    )
}

export default Form;