import React, {Fragment} from 'react';
import {Alert, Button} from 'react-bootstrap'

const ActionsUser = (props) => {
    console.log(props)
    const {handleSubmit,
        id,
        setId,
        index,
        setUsername,
        setFirstName,
        setLastName,
        setPassword,
        username,
        usernameError,
        firstName,
        firstNameError,
        lastName,
        lastNameError,
        password,
        passwordError} = props
    return (
        <form>
       {index == 1 ?  <h1>Добавить пользователя</h1> : <h1>Редактировать пользователя</h1>} 

       {index == 2 && 
        (<div>
        <label>Выберите ID</label>
        <input
            name='id'
            placeholder='id'
            value={id}
            onChange={(e) => setId(e.target.value)}
        />
        </div>)}
        
        <div>
        <label>Username</label>
        <input
            name='username'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}

        />
        {usernameError.length > 0 &&
            usernameError.map((err, i) =>
                <Alert key={i} variant='danger'>{err}</Alert>
            )}</div>
        
        <div>
        <label>first_name</label>
        <input
            name='first_name'
            placeholder='first_name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
        {firstNameError.length > 0 &&
            firstNameError.map((err, i) =>
                <Alert key={i} variant='danger'>{err}</Alert>
            )}
        </div>

        <div>
        <label>last_name</label>
        <input
            name='last_name'
            placeholder='last_name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
        {lastNameError.length > 0 &&
            lastNameError.map((err, i) =>
                <Alert key={i} variant='danger'>{err}</Alert>
            )}
        </div>

        <div>
        <label>Password</label>
        <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError.length > 0 &&
            passwordError.map((err, i) =>
                <Alert key={i} variant='danger'>{err}</Alert>
            )}
        </div>
        <Button variant="outline-secondary"  onClick={(e) => handleSubmit(e, index)}>Отправить</Button>
    </form>
    )
}

export default ActionsUser;