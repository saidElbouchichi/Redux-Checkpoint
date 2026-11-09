import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, SET_FILTER } from './actionTypes';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { id: Date.now(), description, isDone: false },
});

export const toggleTask = (id) => ({ type: TOGGLE_TASK, payload: id });

export const editTask = (id, description) => ({ type: EDIT_TASK, payload: { id, description } });

// filter : 'all' | 'done' | 'notDone'
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
