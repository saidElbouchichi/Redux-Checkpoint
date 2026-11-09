import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTask(text.trim()));
    setText('');
  };

  return (
    <form className="add" onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Nouvelle tâche..." />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddTask;
