import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'
import { fetchTodos } from '../actions/todoActions'

import Todo from '../components/Todo'

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
        { todos.map(todo => <Todo key={ todo.id } todo={ todo }/>) }
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
  fetchTodos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
