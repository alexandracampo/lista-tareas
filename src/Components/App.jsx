import '../styles/App.scss';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import ListTasks from './ListTasks';
import Form from './Form';
import Modal from './Modal';
import ls from '../services/localStorage';

function App() {

  const [tasksList, setTasksList] = useState(ls.get('persistent_tasks_list'));
  const [modal, setModal] = useState(false);

  //Usamos useEffect para guardar los datos en el local storage
  // Cuando React renderice y pinte el HTML en la página ejecutará este useEffect
  // Este useEffect solo se ejecutará cuando cambie el listado
  useEffect(() => {
    // Guardamos  en el local storage
    ls.set('persistent_tasks_list', tasksList);
  }, [tasksList]);

  return (
    <div  >

      <div className={modal ? 'app-modal-active' : ''}>
        <Header />
        <Form
          tasksList={tasksList}
          setTasksList={setTasksList} />
        <ListTasks
          tasksList={tasksList}
          modal={modal}
          setModal={setModal}
          setTasksList={setTasksList}
        />
      </div>

      <div className='container-modal'>

        <Modal
          modal={modal}
          setModal={setModal}
          tasksList={tasksList}
          setTasksList={setTasksList}
        />

      </div>

    </div>
  );
}

export default App;