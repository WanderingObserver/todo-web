const initialState = {
  current: {},
  all: []
}

export default function todosReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_TODOS':
      return { ...state, all: action.payload }
    case 'CREATE_TODO':
      return { ...state, all: [...state.all, action.payload] }
    case 'DELETE_TODO':
      return { ...state, all: state.all.filter(todo => todo._id !== action.payload._id) }
    default: return state
  }
}
