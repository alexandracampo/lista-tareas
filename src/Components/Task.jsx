import '../styles/App.scss';
import '../styles/Task.scss';
import React, { useState } from 'react';
import { FcFullTrash } from "react-icons/fc";
import Modal from './Modal';


function Task({ tasksList, setTasksList, modal, setModal }) {

    const [checkedTasks, setCheckedTasks] = useState({});



    const handleCheckedTask = (ev) => {
        setCheckedTasks(prevList => ({
            ...prevList,
            [ev.target.id]: ev.target.checked
        }));
    }

    const handleTrashButton = (ev) => {
        ev.preventDefault();
        /*  //setModal(true)
         if (window.confirm('¿Seguro que quieres eliminar la tarea?')) {
             setTasksList(
                 tasksList.filter(t => t !== task));
         } */
        setModal(true)

    }

    /*  const confirm = () => {
         // Abrir modal
         setModal(!modal);
         // ESPERAR RESPUESTA
         //
         // Cerrar modal
         //
         // Devolver respuesta
         return true;
     } */

    return (
        <>
            {tasksList.map((taskValue, index) => (
                <li className='task' key={index}>
                    <input
                        id={index}
                        onChange={handleCheckedTask}
                        type="checkbox"
                        value={checkedTasks[index]}
                        className={`${checkedTasks[index] ? 'task__checked' : 'task__checkbox'}`}
                    >
                    </input>
                    <p className={`${checkedTasks[index] ? 'task__text text--cross' : 'task__text'}`}>{taskValue}</p>
                    <button
                        className='task__remove'
                        onClick={(ev) => handleTrashButton(ev, taskValue)}
                    >
                        <FcFullTrash className='img-trash' />
                    </button>
                </li>
            ))}

        </>
    );
}

export default Task;