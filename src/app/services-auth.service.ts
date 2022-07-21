import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class ServicesAuthService {

  constructor(private fire:AngularFireAuth) { }


  async register(email:string,password:string){
    try{
      return await this.fire.createUserWithEmailAndPassword(email,password)
    }catch (error){
      console.log(error)
      return null;
    }
  }

  async login(email:string,password:string){
    try{
      return await this.fire.signInWithEmailAndPassword(email,password)
    }catch (error){
      console.log(error)
      return null;
    }
  }

  async loginGoogle(nombre:string,password:string){
    try{
      return await this.fire.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch (error){
      console.log("error google",error)
      return null;
    }
  }
  getUserlogged(){
    return this.fire.authState;
  }

  logout(){
    this.fire.signOut();
  }
}
