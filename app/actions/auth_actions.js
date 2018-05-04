import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  NAME_CHANGED,
  CREATE_USER,
  LOGIN_USER,
} from './types'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  }
}

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text,
  }
}

// signup user on firebase
export const createUser = (name, email, password) => {
  return async (dispatch) => {
    // creating firebase user workflow
    try {
      // standard user object
      let user = { name, email }
      // create user on firebase
      let { uid } = await firebase.auth().createUserWithEmailAndPassword(email, password)
      // set implicit user connection to db
      await firebase.database().ref('users').child(uid).set(user)
      // update user to have uid
      user = { ...user, uid }
      // dispatch action to reducer
      dispatch({ type: CREATE_USER, payload: user })
      console.log("User object on signup", user)
      // navigate to main
      Actions.MainFlow()
    } catch(error) {
      // if any network requests fail
      alert(error)
    }
  }
}

// login user on firebase
export const loginUser = (email, password) => {
  return async (dispatch) => {
    // create firebase login workflow
    try {
      // attempt login and extract user object
      let { uid } = await firebase.auth().signInWithEmailAndPassword(email, password)
      // get info from db
      let snapshot  = await firebase.database().ref(`users/${uid}`).once('value')
      // get value from firebase return
      const val = snapshot.val()
      // combine snapshot and user object
      const user = { uid, ...val }
      // send to reducers
      dispatch({ type: LOGIN_USER, payload: user })
      // nav to main flow
      Actions.MainFlow()

    } catch(error) {
      alert(error)
    }
  }
}
