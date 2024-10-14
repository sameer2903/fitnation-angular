import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { PlanComponent } from './plan/plan.component';
import { AluminiumPassComponent } from './aluminium-pass/aluminium-pass.component';
import { DiamondPassComponent } from './diamond-pass/diamond-pass.component';
import { PlatinumPassComponent } from './platinum-pass/platinum-pass.component';
const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'aluminium', component: AluminiumPassComponent },
  { path: 'diamond', component: DiamondPassComponent },
  { path: 'platinum', component: PlatinumPassComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
