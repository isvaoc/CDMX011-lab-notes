import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; 
import { SignUpComponent } from './components/sign-up/sign-up.component'; 
import { LogInComponent } from './components/log-in/log-in.component';

import { AuthGuard } from './services/auth.guard';
import { AuthGuard2 } from './services/auth2.guard';

const routes: Routes = [
  { path: '', component: LogInComponent, canActivate:[AuthGuard2] },
  { path: 'signUp', component: SignUpComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
