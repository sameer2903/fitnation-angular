import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 // Adjust the path if necessary

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {  MyplanComponent } from './myplan/myplan.component';
import { ProgramComponent } from './program/program.component';
import { PlansComponent } from './plans/plans.component';
import { AuthService } from './services/auth.service';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { AluminiumPassComponent } from './aluminium-pass/aluminium-pass.component';
import { DiamondPassComponent } from './diamond-pass/diamond-pass.component';
import { PlatinumPassComponent } from './platinum-pass/platinum-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MyplanComponent,
    ProgramComponent,
    PlansComponent,
    AluminiumPassComponent,
    DiamondPassComponent,
    PlatinumPassComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // Add HttpClientModule here
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
