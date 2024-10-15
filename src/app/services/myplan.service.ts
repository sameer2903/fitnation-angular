// services/myplan.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyplanService {
  private apiUrl = 'http://localhost:8080/auth'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  getUserPlans(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}/plans`);
  }
}
