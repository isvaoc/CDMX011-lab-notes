import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  ngOnInit(): void {
  }

  user={
    email:'',
    name:'',
    password:'',
    repeatPassword:''
  }

  constructor(private router: Router, private authService: AuthService){}

  newSignUp(){
    console.log(this.user);
    const {email, name, password, repeatPassword} = this.user;
    if (email !== '' && name !== '' && password !== '' && repeatPassword !== ''){
      this.authService.signUp(email, password).then((res)=> {
        console.log('se registró ' + res)
        this.router.navigate(['home'])
      })
    } else {
      console.log('llena todos los campos')
    }
  }

}
