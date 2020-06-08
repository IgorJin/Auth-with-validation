export const loginPostFetch = user => {
    return dispatch => {
        return fetch('https://emphasoft-test-assignment.herokuapp.com/api-token-auth/', {
            method: "POST",
            headers : {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(user)
        })
          .then(response => response.json())
          .then(data => {
              console.log(data , 'data from fetch')
              if (data.token) {
                  localStorage.setItem('jwt', data.token)
                  dispatch(loginUser(data.token))
              }
          })
    }
}

export const usersListFetch = token => {
    return dispatch => {
        return fetch('https://emphasoft-test-assignment.herokuapp.com/api/v1/users/', {
            method: "GET",
            headers : {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization' : 'Token '+ token
            },
        })
          .then(response => response.json())
          .then(data => {
                console.log(data)
                if (data.detail) {
                }else{
                    dispatch(usersList(data))
                }
          })
    }
}

export const userAddFetch = (token, user) => {
    return dispatch => {
        console.log(token, user)
        return fetch('https://emphasoft-test-assignment.herokuapp.com/api/v1/users/', {
            method: "POST",
            headers : {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization' : 'Token '+ token
            },
            body: JSON.stringify(user)
        })
          .then(response => response.json())
          .then(data => {
                console.log(data)
                if (data.detail) {
                }else{
                    dispatch(userAdd(data))
                }
          })
    }
}

export const userEditFetch = (token, id, user) => {
    return dispatch => {
        return fetch(`https://emphasoft-test-assignment.herokuapp.com/api/v1/users/${id}/`, {
            method: "PUT",
            headers : {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization' : 'Token '+ token
            },
            body: JSON.stringify(user)
        })
          .then(response => response.json())
          .then(data => {
                console.log(data)
                if (data.detail) {
                }else{
                    dispatch(userEdit(data))
                }
          })
    }
}

const loginUser = token => ({
    type: 'LOGIN_USER',
    playload: token,
    isLogin : true
})

export const usersList = data => ({
    type: 'GET_USERS',
    users: data,
})

const userAdd = data => ({
    type: 'ADD_USER',
    user: {...data},
})

const userEdit = (data) => ({
    type: 'EDIT_USER',
    user: data,
})


