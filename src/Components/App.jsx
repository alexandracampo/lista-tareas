import '../styles/App.scss';
import React, { useState } from 'react';
import Header from './Header';
import ListTasks from './ListTasks';
import Form from './Form';
import Modal from './Modal';

function App() {

  const [tasksList, setTasksList] = useState([]);
  const [modal, setModal] = useState(false);

  return (
    <div  >

      <div className={modal ? 'app-modal-active' : ''}>
        <Header />
        <Form tasksList={tasksList} setTasksList={setTasksList} />
        <ListTasks
          tasksList={tasksList}
          modal={modal}
          setModal={setModal} />
      </div>

      <div className='container-modal'>
        <Modal
          modal={modal}
          setModal={setModal} />
      </div>

    </div>
  );
}

export default App;