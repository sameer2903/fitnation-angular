import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Adjust the path if necessary
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user1= {
    email: '',
  password: '',
  };

  constructor(private authService: AuthService) {}

  onLogin() {
    console.log('User data:', this.user1)
    this.authService.login(this.user1).subscribe(response => {
      console.log('User logged in successfully!', response);
    }, error => {
      console.error('error logging in user', error);
    });
  }
}
