const baseUrl = 'http://localhost:3005/api/v1'

export const fetchSubTodos = todo => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/todos/${ todo.id }/sub_todos`, data)
      .then(response => response.json())
      .then(subTodos => {
        dispatch({
            type: 'FETCH_SUB_TODOS',
            payload: subTodos
        })
      })
      .catch(err => err)
  }
}

export const createSubTodo = (subTodo, todoId) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ sub_todo: subTodo })
  }

  return dispatch => {
    fetch(`${ baseUrl }/todos/${ todoId }/sub_todos`, data)
      .then(response => response.json())
      .then(subTodo => dispatch({
        type: 'CREATE_SUB_TODO',
        payload: subTodo
      }))
      .catch(err => err)
  }
}

export const deleteSubTodo = (id, todoId) => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/todos/${ todoId }/sub_todos/${ id }`, data)
      .then(response => response.json())
      .then(subTodo => dispatch({
        type: 'DELETE_SUB_TODO',
        payload: subTodo
      }))
      .catch(err => err)
  }
}
