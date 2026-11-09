import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions';
import Task from './Task';

const filters = [
  { value: 'all', label: 'Toutes' },
  { value: 'done', label: 'Faites' },
  { value: 'notDone', label: 'Pas faites' },
];

function ListTask() {
  const { tasks, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const visible = tasks.filter((t) =>
    filter === 'done' ? t.isDone : filter === 'notDone' ? !t.isDone : true
  );

  return (
    <section>
      <div className="filters">
        {filters.map((f) => (
          <button
            key={f.value}
            className={filter === f.value ? 'active' : ''}
            onClick={() => dispatch(setFilter(f.value))}
          >
            {f.label}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="empty">Aucune tâche.</p>
      ) : (
        <ul className="list">
          {visible.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ListTask;
