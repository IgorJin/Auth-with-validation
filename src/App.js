import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import UsersList from './components/UsersList'
import {Alert} from 'react-bootstrap'
import { connect } from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({loggedIn}) {
  return (
    <div className="App">
      <div className='my_app'><Alert variant='info'>Тестовое приложение (Автор: <Alert.Link href="https://spb.hh.ru/resume/472c81c7ff0560fbd20039ed1f655773347866">Игорь Зубенко</Alert.Link>)!</Alert></div>
      <nav>
        {!loggedIn && (<div><Link to='/login'>Авторизоваться</Link></div>)}
        <div><Link to='/register'>Добавить пользователя</Link></div>
        <div><Link to='/'>К списку пользователей</Link></div>
      </nav>
      

      <Switch>
        <Route exact path="/">
          {!loggedIn ? <Redirect to="/login" /> : <UsersList />}
        </Route>
        <Route path='/register' children={<RegisterPage />} />
        <Route exact path="/login">
          {loggedIn ? <Redirect to="/" /> : <LoginPage />}
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.isLogin
})


export default connect(mapStateToProps)(App);

