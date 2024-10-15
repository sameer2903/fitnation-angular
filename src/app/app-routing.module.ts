import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';
import { ProgramComponent } from './program/program.component';
import { MyplanComponent } from './myplan/myplan.component';
import { AluminiumPassComponent } from './aluminium-pass/aluminium-pass.component';
import { DiamondPassComponent } from './diamond-pass/diamond-pass.component';
import { PlatinumPassComponent } from './platinum-pass/platinum-pass.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'my-plans', component: MyplanComponent },
  { path: 'aluminium-pass', component: AluminiumPassComponent },
  { path: 'diamond-pass', component: DiamondPassComponent },
  { path: 'platinum-pass', component: PlatinumPassComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
