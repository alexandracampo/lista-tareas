import '../styles/App.scss';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import ListTasks from './ListTasks';
import Form from './Form';
import Modal from './Modal';
import ls from '../services/localStorage';


function App() {

  //FORM:
  const [inputTask, setInputTask] = useState('');
  const [alert, setAlert] = useState('');

  //TASKSLIST:
  const [tasksList, setTasksList] = useState(ls.get('persistent_tasks_list'));

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


  return (
    <>
      <div className={modal ? 'app-modal-active' : ''}>
        <Header />
        <Form
          inputTask={inputTask}
          setInputTask={setInputTask}
          alert={alert}
          setAlert={setAlert}
          tasksList={tasksList}
          setTasksList={setTasksList}
        />
        <ListTasks
          checkedTasks={checkedTasks}
          setCheckedTasks={setCheckedTasks}
          deletingTask={deletingTask}
          setDeletingTask={setDeletingTask}
          setModal={setModal}
          modal={modal}
          tasksList={tasksList}
          setTasksList={setTasksList}
        />
      </div>
      <Modal
        modal={modal}
        setModal={setModal}
        tasksList={tasksList}
        setTasksList={setTasksList}
        deletingTask={deletingTask}
      />
    </>
  );
}

export default App;