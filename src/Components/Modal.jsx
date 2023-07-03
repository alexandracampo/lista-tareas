import '../styles/Modal.scss';


function Modal({ modal, setModal, taskList, setTaskList }) {

    const handleCloseModal = () => {
        setModal(false)
    }

    const handleModalDelete = (ev) => {

    }

    return (
        <>
            {modal && (
                <div className="modal">
                    <div className="modal__text">
                        <h3>¿Seguro que quieres borrar esta tarea?</h3>
                        <div className="modal__buttons">
                            <button onClick={handleModalDelete}>Sí</button>
                            <button onClick={handleCloseModal}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;