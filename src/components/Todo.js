import React from 'react'

const Todo = ({ todo: { title, description }}) =>
  <div>
    <h1>{ title }</h1>
    <p>{ description }</p>
    <ul>
      { renderSubTodos() }
    </ul>
  </div>

  function renderSubTodos() {
    return <div>Sub Todo</div>
  }

export default Todo
