import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { signupUser } from '../actions/userActions'

class Signup extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      password_confirmation: '',
      firstname: '',
      lastname: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const field = e.target.name
    let state = this.state

    state[field] = e.target.value
    this.setState(state)
  }

  onSubmit(e) {
    e.preventDefault()

    const user = this.state
    this.props.signupUser(user, () => this.props.history.push('/'))
  }

  render() {
    const { username, password, password_confirmation, firstname, lastname } = this.state

    return (
      <>
        <h1>Sign Up</h1>
        <form onSubmit={ this.onSubmit }>
          <input name="username" placeholder="Username" value={ username } onChange={ this.onChange }/><br/>
          <input type='password' name="password" placeholder="Password" value={ password } onChange={ this.onChange }/><br/>
          <input type='password' name="password_confirmation" placeholder="Password Confirmation" value={ password_confirmation } onChange={ this.onChange }/><br/>
          <input name="firstname" placeholder="Firstname" value={ firstname } onChange={ this.onChange }/><br/>
          <input name="lastname" placeholder="Lastname" value={ lastname } onChange={ this.onChange }/><br/>
          <button type="submit">Signup</button>
        </form>
        <Link to='/login'>Log In</Link>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  signupUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Signup))
