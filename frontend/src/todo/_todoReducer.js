const initialState = {
  description: '',
  list: [
    {
      _id: 1,
      description: 'Pagar Fatura',
      done: false
    },
    {
      _id: 2,
      description: 'Estudar React',
      done: false
    },
    {
      _id: 3,
      description: 'Concluir Mestrado',
      done: true
    },
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_DESCRIPTION':
      return { ...state, description: action.payload }
    case 'SEARCH_TODO':
      return { ...state, list: action.payload.data }
    default:
      return state
  }    
}