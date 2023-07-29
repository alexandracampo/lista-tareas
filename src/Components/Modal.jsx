import '../styles/Modal.scss';
import React, { useState } from 'react';


function Modal({ modal, setModal, tasksList, setTasksList }) {

    const [deletingTask, setDeletingTask] = useState(true)

    const handleModalNo = () => {
        setModal(false)
    }

    const handleModalDelete = (ev, task) => {
        setModal(false)
        setTasksList(tasksList.filter(t => t !== task));
        console.log(task)
    }

    return (
        <>
            {modal && (
                <div className="modal">
                    <div className="modal__text">
                        <h3>¿Seguro que quieres borrar esta tarea?</h3>
                        <div className="modal__buttons">
                            <button onClick={(ev) => handleModalDelete(ev, "cierro modal")}>Sí</button>
                            <button onClick={handleModalNo}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;