import { combineReducers } from 'redux'
import todo from './todolist'

const todoApp = combineReducers({
  todolist: todo
})

export default todoApp