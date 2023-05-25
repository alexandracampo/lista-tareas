import '../styles/App.css';

function App() {
  return (
    <>

      <h1>To-do List 📋</h1>

      <form>
        <input type='text' placeholder='Añade aquí tu tarea'></input>
        <button>Agregar tarea nueva</button>
      </form>

      <ul>
        <li>
          <p></p>
          <button>editar</button>
          <button>checked</button>
          <button>borrar</button>
        </li>
      </ul>
    </>
  );
}

export default App;
