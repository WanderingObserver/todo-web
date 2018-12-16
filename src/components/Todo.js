import React from 'react'
import SubTodo from './SubTodo'
import SubTodoForm from './SubTodoForm'

const Todo = ({ todo: { id, title, description, sub_todos }, deleteTodo, deleteSubTodo }) =>
  <div>
    <h1>{ title }</h1>
    <p>{ description }<button onClick={ () => deleteTodo(id) }>Complete Todo</button></p>
    <ul>
      { sub_todos.map(sub_todo => <SubTodo key={ sub_todo.id } sub_todo={ sub_todo } todoId={ id } deleteSubTodo={ deleteSubTodo }/>) }
    </ul>
    <SubTodoForm todoId={ id }/>
  </div>

export default Todo
