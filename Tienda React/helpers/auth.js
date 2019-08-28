import { ref, firebaseAuth } from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function IniciarSesion (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}
