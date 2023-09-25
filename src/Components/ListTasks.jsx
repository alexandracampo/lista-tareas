import '../styles/App.scss';
import { FcFullTrash } from "react-icons/fc";


function ListTasks({ checkedTasks, setCheckedTasks, deletingTask, setDeletingTask, setModal, modal, tasksList, setTasksList }) {
  const handleCheckedTask = (ev) => {
    setCheckedTasks(prevList => ({
      ...prevList,
      [ev.target.id]: ev.target.checked
    }));
  }

  const handleTrashButton = (ev, task) => {
    ev.preventDefault();
    setDeletingTask(task)
    setModal(true)
  }
  return (
    <>
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

    </>
  );
}

export default ListTasks;