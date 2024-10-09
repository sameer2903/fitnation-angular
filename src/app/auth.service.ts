import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'http://localhost:3000/users'; // Path to your JSON database


  constructor(private http: HttpClient) { }
   // Method to authenticate user
   authenticate(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      // Filter users based on email and password
      map(users => users.find(user => user.email === email && user.password === password))
    );
  }
}

