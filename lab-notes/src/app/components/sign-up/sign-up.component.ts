import { Component, OnInit } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { } //private auth:AngularFireAuth

  ngOnInit(): void {
  }

  /*signUpUser(){
    this.auth.createUserWithEmailAndPassword('test@test.com','123456')
  }*/
}
