const baseUrl = 'http://localhost:3005/api/v1'

export const fetchTodos = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/todos`, data)
      .then(response => response.json())
      .then(todos => {
        dispatch({
            type: 'FETCH_TODOS',
            payload: todos
        })
      })
      .catch(err => err)
  }
}

export const createTodo = todo => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }

  return dispatch => {
    fetch(`${ baseUrl }/todos`, data)
      .then(response => response.json())
      .then(todo => dispatch({
        type: 'CREATE_TODO',
        payload: todo
      }))
      .catch(err => err)
  }
}

export const deleteTodo = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/todos/${ id }`, data)
      .then(response => response.json())
      .then(todo => dispatch({
        type: 'DELETE_TODO',
        payload: todo
      }))
      .catch(err => err)
  }
}
