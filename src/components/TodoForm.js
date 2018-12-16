import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createTodo } from '../actions/todoActions'

class TodoForm extends Component {
  constructor() {
    super()

    this.state = {
      title: "",
      description: ""
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const field = e.target.name
    let state = this.state

    state[field] = e.target.value
    this.setState(state)
  }

  onSubmit(e) {
    e.preventDefault()

    this.props.createTodo(this.state)
    this.setState({
      title: "",
      description: ""
    })
  }

  render() {
    const { title, description } = this.state

    return (
      <form onSubmit={ this.onSubmit }>
        <input name="title" placeholder="Title" value={ title } onChange={ this.onChange }/>
        <input name="description" placeholder="Description" value={ description } onChange={ this.onChange }/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createTodo
}, dispatch)

export default connect(null, mapDispatchToProps)(TodoForm)
