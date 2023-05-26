import '../styles/App.css';
import React, { useState } from 'react';
/* import ListTasks from './ListTasks';
 */
function App() {

  const [inputTask, setInputTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const handleInputTask = (ev) => {
    setInputTask(ev.target.value);

  }

  const handleBtnNewTask = (ev) => {
    ev.preventDefault();
    if (inputTask.trim() !== '') {
      setTasksList([...tasksList, inputTask]);
      setInputTask('');
    }
  }

  return (
    <>
      <h1>To-do List 📋</h1>

      <form>
        <input value={inputTask} onChange={handleInputTask} type='text' placeholder='Añade aquí tu tarea'></input>
        <button onClick={handleBtnNewTask}>Agregar tarea nueva</button>
      </form>

      <ul>
        {tasksList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
