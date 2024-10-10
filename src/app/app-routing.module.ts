import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramComponent } from './program/program.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  //{ path: 'dashboard', component: YourDashboardComponent }, // Update with your actual dashboard component
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'program', component: ProgramComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
