import { SET_LOGIN_PENDING,SET_LOGIN_SUCCESS,SET_LOGIN_ERROR } from '../actions/login_action';

const initailState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}

export default function reducer(state =initailState,  action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
    debugger
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
    debugger
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
    debugger
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}