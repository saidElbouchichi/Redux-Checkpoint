import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../redux/actions';

function Task({ id, description, isDone }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(description);
  const dispatch = useDispatch();

  const save = () => {
    if (text.trim()) dispatch(editTask(id, text.trim()));
    setEditing(false);
  };

  return (
    <li className={isDone ? 'task done' : 'task'}>
      <input type="checkbox" checked={isDone} onChange={() => dispatch(toggleTask(id))} />
      {editing ? (
        <input
          className="edit"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && save()}
          autoFocus
        />
      ) : (
        <span>{description}</span>
      )}
      {editing ? (
        <button onClick={save}>Enregistrer</button>
      ) : (
        <button onClick={() => setEditing(true)}>Modifier</button>
      )}
    </li>
  );
}

export default Task;
