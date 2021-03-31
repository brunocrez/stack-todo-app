import axios from 'axios';

import { CHANGE_DESCRIPTION, CREATE_TODO, SEARCH_TODO } from './_todoTypes';

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
  const response = axios.get(`${API}?sort=-createdAt`);

  return {
    type: SEARCH_TODO,
    payload: response
  }
}

// Action Creator
export function createTodo(description) {
  return dispatch => {
      axios
        .post(API, { description })
        .then(res => dispatch({ type: CREATE_TODO, payload: res.data }))
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
