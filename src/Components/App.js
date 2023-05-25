import '../styles/App.css';

function App() {
  return (
    <>

      <h1>To-do List 📋</h1>

      <form>
        <input type='text' placeholder='Añade aquí tu tarea'></input>
        <button>Agregar tarea nueva</button>
      </form>

      <div>
        <p>Aquí irá la tarea que añada el usuario</p>
        <button>Botón para editar tarea</button>
        <button>Botón para marcar como "tarea hecha"</button>
        <button>Botón para borrar tarea</button>
      </div>

    </>
  );
}

export default App;
