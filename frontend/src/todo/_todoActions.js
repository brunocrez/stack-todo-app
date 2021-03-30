import axios from 'axios';

const API = 'http://localhost:3003/api/todos';

// Action Creator
export function changeDescription(e) {
  return {
    type: 'CHANGE_DESCRIPTION',
    payload: e.target.value
  }
}

// Action Creator
export function getAllTodos() {
  const response = axios.get(`${API}?sort=-createdAt`);

  return {
    type: 'SEARCH_TODO',
    payload: response
  }
}