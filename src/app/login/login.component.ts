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
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    this.authService.authenticate(this.email, this.password).subscribe(user => {
      if (user) {
        alert('Login Successful!');
        this.router.navigate(['/dashboard']); // Navigate to dashboard
      } else {
        alert('Login Failed. Please try again.');
      }
    }, error => {
      alert('An error occurred. Please try again later.');
      console.error(error);
    });
  }
}
