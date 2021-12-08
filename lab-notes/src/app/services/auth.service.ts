import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) {}

  async signUp(email: string, password: string){
    return await this.auth.createUserWithEmailAndPassword(email, password);
  } 

  async logIn(email: string, password: string){
    return await this.auth.signInWithEmailAndPassword(email, password);
  } 

  async signOut(){
    return await this.auth.signOut()
  }

  async getUser(){
    return await this.auth.authState;
  }
  
}
