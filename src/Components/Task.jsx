import '../styles/App.scss';
import '../styles/Task.scss';
import React, { useState } from 'react';
import { FcFullTrash } from "react-icons/fc";

function Task({ tasksList, modal, setModal }) {

    const [checkedTasks, setCheckedTasks] = useState({});


    const handleCheckedTask = (ev) => {
        setCheckedTasks(prevList => ({
            ...prevList,
            [ev.target.id]: ev.target.checked
        }));
    }

    const handleDeleteBtn = (ev) => {
        ev.preventDefault();
        setModal(!modal)
    }

    return (
        <>
            {tasksList.map((task, index) => (
                <li className='task' key={index}>
                    <input
                        id={index}
                        onChange={handleCheckedTask}
                        type="checkbox"
                        value={checkedTasks[index]}
                        className={`${checkedTasks[index] ? 'task__checked' : 'task__checkbox'}`}
                    >
                    </input>
                    <p className={`${checkedTasks[index] ? 'task__text text--cross' : 'task__text'}`}>{task}</p>
                    <button
                        className='task__remove'
                        onClick={handleDeleteBtn}
                    >
                        <FcFullTrash className='img-trash' />
                    </button>
                </li>
            ))}

        </>
    );
}

export default Task;