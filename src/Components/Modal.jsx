import '../styles/Modal.scss';

function Modal({ modal, setModal, tasksList, setTasksList, deletingTask }) {

    const handleModalNo = () => {
        setModal(false)
    }

    const handleModalDelete = (ev) => {
        setModal(false)
        setTasksList(
            tasksList.filter(t => t !== deletingTask));
    }


    return (
        <>
            <div className='container-modal'>
                {modal && (
                    <div className="modal">
                        <div className="modal__text">
                            <h3>¿Seguro que quieres borrar esta tarea?</h3>
                            <div className="modal__buttons">
                                <button onClick={(ev) => handleModalDelete(ev)}>Sí</button>
                                <button onClick={handleModalNo}>No</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Modal; 