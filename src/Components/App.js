import '../styles/App.css';
import React, { useState } from 'react';

function App() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChangeInputTask = (ev) => {
    setNewTask(ev.target.value);
  }

  const handleNewTask = (ev) => {
    setTasks(newTask);
  }

  return (
    <>

      <h1>To-do List 📋</h1>

      <form>
        <input onChange={handleChangeInputTask} type='text' placeholder='Añade aquí tu tarea'></input>
        <button onClick={handleNewTask}>Agregar tarea nueva</button>
      </form>

      <ul>

      </ul>

    </>
  );
}

export default App;
