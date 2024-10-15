import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the User interface here
interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/auth';
  
  constructor(private http: HttpClient) { }

  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user'); // Check if user data exists in localStorage
  }
       
      
    
  

  signup(user: User): Observable<any> {
    console.log("I am in AuthService");
    return this.http.post(`${this.baseUrl}/signup`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }
}
