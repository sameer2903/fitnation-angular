import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user1 = {
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.user1).subscribe(
        (response: any) => {
          console.log('User logged in successfully', response);
          localStorage.setItem('user', JSON.stringify(response)); // Store user object
          this.router.navigate(['/home']); // Navigate to home page on successful login
        },
        (error: any) => {
          console.error('Error logging in user', error);
          this.errorMessage = 'Invalid email or password!'; // Display error message
          this.user1.email = '';
          this.user1.password = '';
          form.resetForm();
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000); // Clear error message after 3 seconds
        }
      );
    }
  }
}
