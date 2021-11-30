import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; 
import { SignUpComponent } from './components/sign-up/sign-up.component'; 
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }