import '../styles/App.scss';
import '../styles/Form.scss';
import React, { useState } from 'react';

function Form({ setTasksList, tasksList }) {

    const [inputTask, setInputTask] = useState('');

    // Función manejadora de los cambios en el input de texto
    const handleInputTask = (ev) => {
        setInputTask(ev.target.value);
    }

    // Función manejadora del botón de "agregar tarea"
    const handleBtnNewTask = (ev) => {
        ev.preventDefault();
        if (inputTask.trim() !== '') {
            setTasksList([...tasksList, inputTask]);
            setInputTask('');
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
        </>
    )
}

export default Form;