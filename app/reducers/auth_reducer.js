import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
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

    default: return state

  }
}
