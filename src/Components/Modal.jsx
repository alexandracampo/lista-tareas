import '../styles/Modal.scss';


function Modal({ modal, setModal }) {

    return (
        <>
            {modal && (
                <div className="modal">
                    <div className="modal__text">
                        <h3>¿Seguro que quieres borrar esta tarea?</h3>
                        <div className="modal__buttons">
                            <button>Sí</button>
                            <button>No</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;