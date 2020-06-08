import React, { useState } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import ActionsUser from './ActionsUser'
import { userAddFetch, userEditFetch } from '../reducers/actions'
import { validator } from '../validator'

const RegisterPage = ({ token, userAddFetch, userEditFetch }) => {
    const [id, setId] = useState('')
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState([])
    const [passwordError, setPasswordError] = useState([])
    const [lastNameError, setLastNameError] = useState([])
    const [firstNameError, setFirstNameError] = useState([])

    function handleSubmit(e, i) {
        let uErr = validator.validate('general', username)
        let pErr = validator.validate('password', password)
        let fnErr = validator.validate('general', firstName)
        let lnErr = validator.validate('general', lastName)
        setUsernameError(uErr)
        setPasswordError(pErr)
        setLastNameError(fnErr)
        setFirstNameError(lnErr)
        e.preventDefault()
        if (uErr.length === 0 && pErr.length === 0 && fnErr.length === 0 && lnErr.length === 0) 
            i == 1 ? userAddFetch(token, { "username": username, "password": password, "first_name": firstName, "last_name": lastName, "is_active": true })
            : userEditFetch(token, id, { "username": username, "password": password, "first_name": firstName, "last_name": lastName, "is_active": true })
    }

    return (
        <div>
        <Route exact path="/register">
            <ActionsUser 
                index='1'
                handleSubmit={handleSubmit}
                setId = {setId}
                id={id}
                setUsername = {setUsername}
                setFirstName = {setFirstName}
                setLastName = {setLastName}
                setPassword = {setPassword}
                username = {username}
                usernameError = {usernameError}
                firstName = {firstName}
                firstNameError = {firstNameError}
                lastName = {lastName}
                lastNameError = {lastNameError}
                password = {password}
                passwordError = {passwordError}
            />
        </Route>
        <Route path="/register/edit">
            <ActionsUser 
                index='2'
                handleSubmit={handleSubmit}
                setId = {setId}
                setUsername = {setUsername}
                setFirstName = {setFirstName}
                setLastName = {setLastName}
                setPassword = {setPassword}
                id={id}
                username = {username}
                usernameError = {usernameError}
                firstName = {firstName}
                firstNameError = {firstNameError}
                lastName = {lastName}
                lastNameError = {lastNameError}
                password = {password}
                passwordError = {passwordError}
            />
        </Route>
        <Link to='/register/edit'>Редактировать</Link>
        </div>
    )

}

const mapStateToProps = state => ({
    token: state.authReducer.token,
})

const mapDispatchToProps = (dispatch) => {
    return {
        userAddFetch: (token, user) => {
            dispatch(userAddFetch(token, user))
        },
        userEditFetch: (token, id, user) => {
            dispatch(userEditFetch(token, id, user))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);