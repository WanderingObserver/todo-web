import React from 'react'

const SubTodo = ({ sub_todo: { description } }) =>
  <li>
    { description }
    <button>Complete</button>
  </li>

export default SubTodo
