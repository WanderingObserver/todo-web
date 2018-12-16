import React from 'react'

const SubTodo = ({ sub_todo: { id, description }, todoId, deleteSubTodo }) =>
  <li>
    { description }
    <button onClick={ () => deleteSubTodo(id, todoId) }>Complete</button>
  </li>

export default SubTodo
