import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root',
})
export class GoogleauthService {

  constructor(public afAuth: AngularFireAuth) { }
  async loginGoogle() {
    try {
      return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    } catch (error) {
      console.log(error);
    }
  }
}
