import React, {useState} from 'react';
import { connect } from 'react-redux'
import {Alert, Button} from 'react-bootstrap'
import { loginPostFetch } from '../reducers/actions'
import {validator} from '../validator'

const LoginPage = ({loginPostFetch}) => {
    const [username, setUsername] = useState('test_super')
    const [usernameError, setUsernameError] = useState([])
    const [password, setPassword] = useState('Nf<U4f<rDbtDxAPn')
    const [passwordError, setPasswordError] = useState([])

    function LoginSubmit(e, username, password) {
        e.preventDefault()
        let uErr = validator.validate('general' , username)
        let pErr = validator.validate('password' , password)
        setUsernameError(uErr)
        setPasswordError(pErr)
        if (uErr.length === 0 && pErr.length === 0) 
            loginPostFetch({ "username": username, "password": password })
    }

    return (
        <form>
            <h1>Войти в личный кабинет</h1>

            <label>Username</label>
            <input
                name='username'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError.length > 0 && 
            usernameError.map((err,i) => 
                <Alert key={i} variant='danger'>{err}</Alert>
            )}
            <br />

            <label>Password</label>
            <input
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError.length > 0 && 
            passwordError.map((err,i) => 
                <Alert key={i} variant='danger'>{err}</Alert>
            )}
            <br />
            
            <Button variant="outline-secondary"  onClick={(e) => LoginSubmit(e, username, password)}>Отправить</Button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginPostFetch: (loginInfo) => {
            dispatch(loginPostFetch(loginInfo))
        },
    }
  }  

export default connect(null, mapDispatchToProps)(LoginPage);