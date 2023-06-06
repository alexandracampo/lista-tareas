import '../styles/App.scss';
import React, { useState } from 'react';
import Header from './Header';
import ListTasks from './ListTasks';
import Form from './Form';

function App() {

  const [tasksList, setTasksList] = useState([]);

  return (
    <>
      <Header />

      <Form tasksList={tasksList} setTasksList={setTasksList} />

      <ListTasks tasksList={tasksList} />
    </>
  );
}

export default App;