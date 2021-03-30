// Action Creator
export function changeDescription(e) {
  return {
    type: 'CHANGE_DESCRIPTION',
    payload: e.target.value
  }
}