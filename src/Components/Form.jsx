import '../styles/App.scss';
import '../styles/Form.scss';
import React, { useState } from 'react';

function Form({ setTasksList, tasksList }) {

    const [inputTask, setInputTask] = useState('');
    const [alert, setAlert] = useState('');

    // Función manejadora de los cambios en el input de texto
    const handleInputTask = (ev) => {
        if (inputTask.trim().length <= 15 || inputTask === '') {
            setInputTask(ev.target.value);
            setAlert('');
        } else {
            setInputTask(ev.target.value);
            setAlert('El texto no puede tener más de 15 caracteres ni estar vacío')
        }
        console.log('Jarvis example');
    }

    // Función manejadora del botón de "agregar tarea"
    const handleBtnNewTask = (ev) => {
        ev.preventDefault();
        if (inputTask.trim() !== '' && inputTask.length <= 15) {
            setTasksList([...tasksList, inputTask]);
            setInputTask('');
            setAlert('');
        } else {
            setAlert('El texto no puede tener más de 15 caracteres ni estar vacío');
        }
    }

    console.log(inputTask.length)

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
                    <p className='alert-max-length'>{alert}</p>
                </div>
            </form>


        </>
    )
}

export default Form;