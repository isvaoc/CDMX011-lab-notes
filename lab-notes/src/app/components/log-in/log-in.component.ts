import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  

  ngOnInit(): void {
  }

  user={
    email:'',
    password:''
  }

  constructor(private authService: AuthService, private router:Router){}

  newLogIn(){
    const {email, password} = this.user;
    if (email !== '' && password !== ''){
      this.authService.logIn(email, password).then((res)=> {
        console.log('inició sesion ' + res)
        this.router.navigate(['home'])
      })
    } else {
      console.log('llena todos los campos')
    }
  }

}
