import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  onSignUp(form: NgForm) {
    if (form.valid) {
      this.authService.signup(this.user).subscribe(
        (response: any) => {
          console.log('User registered successfully', response);
          localStorage.setItem('user', JSON.stringify(response)); // Store user object
          this.router.navigate(['/home']); // Navigate to home page on successful signup
        },
        (error: any) => {
          console.error('Error registering user', error);
          // Handle error (e.g., show error message)
        }
      );
    }
  }
}
