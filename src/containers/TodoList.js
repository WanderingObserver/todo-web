import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'
import { fetchTodos, deleteTodo } from '../actions/todoActions'
import { deleteSubTodo } from '../actions/subtodoActions'

import Todo from '../components/Todo'
import TodoForm from '../components/TodoForm'

class TodoList extends Component {
  componentWillMount() {
    this.props.fetchUser()
    this.props.fetchTodos()
  }

  render() {
    const { user, todos } = this.props

    return (
      <div>
        <div>{ user.firstname } { user.lastname }</div>
        <h1>To Do</h1>
        <TodoForm/>
        { todos.map(todo => <Todo key={ todo.id } todo={ todo } deleteTodo={ this.props.deleteTodo } deleteSubTodo={ this.props.deleteSubTodo }/>) }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.current,
    todos: state.todos.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  fetchTodos,
  deleteTodo,
  deleteSubTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
