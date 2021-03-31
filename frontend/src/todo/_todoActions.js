import axios from 'axios';

import { CHANGE_DESCRIPTION, CLEAR_DESCRIPTION, SEARCH_TODO } from './_todoTypes';

const API = 'http://localhost:3003/api/todos';

// Action Creator
export function changeDescription(e) {
  return {
    type: CHANGE_DESCRIPTION,
    payload: e.target.value
  }
}

// Action Creator
export function getTodos() {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const filter = description ? `&description__regex=/${description}/i` : '';
    axios
      .get(`${API}?sort=-createdAt${filter}`)
      .then(res => dispatch({ type: SEARCH_TODO, payload: res.data }));
  }
}

// Action Creator
export function createTodo(description) {
  return dispatch => {
      axios
        .post(API, { description })
        .then(res => dispatch({ type: CLEAR_DESCRIPTION, payload: res.data }))
        .then(() => dispatch(getTodos()));
    }
}

// Action Creator
export function setTodoDone(item) {
  return dispatch => {
      axios
        .put(`${API}/${item._id}`, { ...item, done: true })
        .then(() => dispatch(getTodos()));
    }
}

// Action Creator
export function setTodoPending(item) {
  return dispatch => {
      axios
        .put(`${API}/${item._id}`, { ...item, done: false })
        .then(() => dispatch(getTodos()));
    }
}

// Action Creator
export function removeTodo(item) {
  return dispatch => {
      axios
        .delete(`${API}/${item._id}`)
        .then(() => dispatch(getTodos()));
    }
}

// Action Creator
export function clearDescription() {
  return [{ type: CLEAR_DESCRIPTION }, getTodos()];
}

