import '../styles/App.scss';
import '../styles/Form.scss';
import React, { useState } from 'react';

function Form({ setTasksList, tasksList }) {

    const [inputTask, setInputTask] = useState('');
    const [alert, setAlert] = useState('');

    // Función manejadora de los cambios en el input de texto
    const handleInputTask = (ev) => {
        setInputTask(ev.target.value);

        console.log(ev.target.value.trim().length)
    }

    // Función manejadora del botón de "agregar tarea"
    const handleBtnNewTask = (ev) => {
        ev.preventDefault();
        if (inputTask.trim().length === 0) {
            setAlert('El texto no puede estar vacío');
        } else if (inputTask.trim().length > 15) {
            setAlert('El texto no puede tener más de 15 caracteres');
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

                <div className='container-alert'>
                    <p className='alert-message'>{alert}</p>
                </div>
            </form>


        </>
    )
}

export default Form;