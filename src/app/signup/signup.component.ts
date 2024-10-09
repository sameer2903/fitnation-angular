import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  user={
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  };
  constructor(private authService: AuthService) {}

  onSignUp() {
    console.log('User data:', this.user)
    this.authService.signup(this.user).subscribe(response => {
      console.log('User logged in successfully!', response);
    }, error => {
      console.error('error logging in user', error);
    
    });
  }
}
