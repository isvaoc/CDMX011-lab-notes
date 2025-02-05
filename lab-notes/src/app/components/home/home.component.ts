import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService){}

  newSignOut(){
      this.authService.signOut().then((res)=> {
        console.log('saliste' + res)
        this.router.navigate([''])
      })
    
  }
  ngOnInit(): void {
  }

}
