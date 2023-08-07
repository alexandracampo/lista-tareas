import '../styles/App.scss';
import React, { useEffect, useState } from 'react';
import Header from './Header';
//import ListTasks from './ListTasks';
//import Form from './Form';
//import Modal from './Modal'; 
import ls from '../services/localStorage';
import { FcFullTrash } from "react-icons/fc";

function App() {

  const [tasksList, setTasksList] = useState(ls.get('persistent_tasks_list'));

  //FORM:
  const [inputTask, setInputTask] = useState('');
  const [alert, setAlert] = useState('');

  //TASK:
  const [checkedTasks, setCheckedTasks] = useState({});

  //MODAL:
  const [modal, setModal] = useState(false);
  const [deletingTask, setDeletingTask] = useState('')

  //Usamos useEffect para guardar los datos en el local storage
  // Cuando React renderice y pinte el HTML en la página ejecutará este useEffect
  // Este useEffect solo se ejecutará cuando cambie el listado
  useEffect(() => {
    // Guardamos  en el local storage
    ls.set('persistent_tasks_list', tasksList);
  }, [tasksList]);

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
    } else if (inputTask.trim().length > 20) {
      setAlert('El texto no puede tener más de 20 caracteres');
    } else {
      setTasksList([...tasksList, inputTask]);
      setInputTask('');
      setAlert('');
    }
  }

  const handleCheckedTask = (ev) => {
    setCheckedTasks(prevList => ({
      ...prevList,
      [ev.target.id]: ev.target.checked
    }));
  }

  const handleTrashButton = (ev, task) => {
    ev.preventDefault();
    /*  //setModal(true)
     if (window.confirm('¿Seguro que quieres eliminar la tarea?')) {
         setTasksList(
             tasksList.filter(t => t !== task));
     } */
    setDeletingTask(task)

    setModal(true)
  }

  //funciones MODAL:
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
      <div className={modal ? 'app-modal-active' : ''}>
        <Header />

        <div>
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
        </div>

        <div className='list-section'>
          <ul className='list-container'>
            <div>
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
            </div>
          </ul>
        </div>
      </div>


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

export default App;