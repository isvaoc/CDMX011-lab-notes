import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard2 implements CanActivate {

  constructor (private router: Router, private afAuth: AngularFireAuth){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise ((resolve, reject)=>{
      this.afAuth.onAuthStateChanged((user)=>{
        console.log(this.router.url)
        if (user){
          resolve(false);
        } else {
          console.log(' no estás loggueado');
          resolve(true);
        }
      })
    })
  }
  
}
