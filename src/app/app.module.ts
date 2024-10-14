import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Adjust the path if necessary
import { SignUpComponent } from './signup/signup.component';
import { PlanComponent } from './plan/plan.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogContentExampleDialog } from './plan/plan.component';
import { AluminiumPassComponent } from './aluminium-pass/aluminium-pass.component';
import { DiamondPassComponent } from './diamond-pass/diamond-pass.component';
import { PlatinumPassComponent } from './platinum-pass/platinum-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DialogContentExampleDialog,
    AluminiumPassComponent,
    DiamondPassComponent,
    PlatinumPassComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // Add HttpClientModule here
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    PlanComponent
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
