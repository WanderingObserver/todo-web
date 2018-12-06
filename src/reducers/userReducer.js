const initialState = {
  current: {}
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_USER':
      return { ...state, current: action.payload }
    default: return state
  }
}
