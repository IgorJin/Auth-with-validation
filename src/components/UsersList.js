import React, { useState,useEffect } from 'react';
import { Table, InputGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux'
import { usersListFetch, usersList } from '../reducers/actions'

const UsersList = ({token, users, usersListFetch, getUsers, usersList}) => {
    const [sort, SetSort] = useState(1)
    useEffect(()=>{
        usersListFetch(token)
    }, [token])

    const filterTable = (e) => {
        const value = e.target.value.toLowerCase()
        const filtered = users.filter(user =>(user.username.toLowerCase().includes(value)))
        usersList(filtered)
    }
    const sortTable = () => {
        const sorted = [].slice.call(users).sort((a, b) => {
            if (a['id'] === b['id']) { return 0; }
            return a['id'] > b['id'] ? sort : sort * -1;
        });
        SetSort(sort * (-1))
        usersList(sorted)
    }

    return (
        <div>   
            <label htmlFor="filter_uname"></label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        Фильтрация по 'username'
                </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                    id="filter_uname"  
                    name='filter'
                    placeholder='John'
                    onChange={filterTable}/>
            </InputGroup>
                
            <Table>
                <thead>
                    <tr>
                        <th onClick={sortTable}>ID {sort === 1 ? (<span>/\</span>) : (<span>\/</span>)}</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {getUsers && users.map((user, i) => (
                        <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = state => ({
    token: state.authReducer.token,
    getUsers: state.authReducer.getUsers,
    users: state.authReducer.users
  })

const mapDispatchToProps = (dispatch) => {
    return {
        usersListFetch: (token) => {
            dispatch(usersListFetch(token))
        },
        usersList: (users) => {
            dispatch(usersList(users))
        },
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);