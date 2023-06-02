import '../styles/App.scss';
import React, { useState } from 'react';
import ListTasks from './ListTasks';
import imageHeader from '../images/img-task2.png'
import { FaBeer } from 'react-icons/fa'

function App() {

  const [inputTask, setInputTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

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
      <header className='header'>
        <h1 className="header__title">Taskify </h1>
        <img src={imageHeader} className='header__img'></img>
      </header>

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

      <ListTasks tasksList={tasksList} />
    </>
  );
}

export default App;