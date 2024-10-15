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
import { AuthGuard } from './auth.guard'; // Import AuthGuard

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'plans', component: PlansComponent, canActivate: [AuthGuard] },
  { path: 'program', component: ProgramComponent, canActivate: [AuthGuard] },
  { path: 'my-plans', component: MyplanComponent, canActivate: [AuthGuard] },
  { path: 'aluminium-pass', component: AluminiumPassComponent, canActivate: [AuthGuard] },
  { path: 'diamond-pass', component: DiamondPassComponent, canActivate: [AuthGuard] },
  { path: 'platinum-pass', component: PlatinumPassComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
