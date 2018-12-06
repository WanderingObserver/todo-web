import { combineReducers } from 'redux'

import userReducer from './userReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
  user: userReducer,
  todos: todosReducer
})

export default rootReducer
