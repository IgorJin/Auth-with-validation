const initialState = {}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            return {
                ...state,
                token:action.playload,
                isLogin: action.isLogin
            };
        case 'GET_USERS':
            return {
                ...state,
                users: action.users,
                getUsers: true
            };
        case 'ADD_USER':
                return {
                    ...state,
                    users: [...state.users, ...action.user]
                };
        case 'EDIT_USER':
                return {
                    ...state,
                    users: state.users.map(user=> (action.user.id === user.id ? user  : action.user))
                };
        default:
            return state;
        }
    }

export default authReducer