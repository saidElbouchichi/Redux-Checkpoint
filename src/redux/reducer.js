import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, SET_FILTER } from './actionTypes';

const initialState = {
  tasks: [
    { id: 1, description: 'Lire le cours sur Redux', isDone: true },
    { id: 2, description: 'Créer le store et le reducer', isDone: false },
    { id: 3, description: 'Soumettre le checkpoint', isDone: false },
  ],
  filter: 'all',
};

// Reducer pur : retourne toujours un nouvel état, sans muter l'ancien
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t) => (t.id === action.payload ? { ...t, isDone: !t.isDone } : t)),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? { ...t, description: action.payload.description } : t
        ),
      };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

export default todoReducer;
