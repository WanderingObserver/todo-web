import React, { Component } from 'react'

export default class SubTodoForm extends Component {
  constructor() {
    super()

    this.state = {
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
    e.prevenDefault()

    this.setState({ description: "" })
  }

  render() {
    const { description } = this.state

    return (
      <form onSubmit={ this.onSubmit }>
        <input name="description" placeholder="Description" value={ description } onChange={ this.onChange }/>
        <button type="submit">Add</button>
      </form>
    )
  }
}
