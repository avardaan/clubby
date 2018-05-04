import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  NAME_CHANGED,
  CREATE_USER,
  LOGIN_USER
} from '../actions/types'

// user in this object is vanilla firebase user object
const INITIAL_STATE = {
  email: '',
  password: '',
  name: '',
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {

    case EMAIL_CHANGED:
      return { ...state, email: action.payload }

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }

    case NAME_CHANGED:
      return { ...state, name: action.payload }

    case CREATE_USER:
      return { ...state, user: action.payload }

    case LOGIN_USER:
      return { ...state, user: action.payload }

    default: return state

  }
}
