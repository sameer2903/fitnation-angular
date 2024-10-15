import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Plan {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans: Plan[] = [];
  subscribedPlans: number[] = [];
  successMessage: string | null = null;

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.fetchPlans();
    this.fetchSubscribedPlans();
  }

  fetchPlans(): void {
    this.http.get<Plan[]>('http://localhost:8080/plans').subscribe(data => {
      this.plans = data;
    });
  }

  fetchSubscribedPlans(): void {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      const userId = user.id;
      this.http.get<Plan[]>(`http://localhost:8080/auth/${userId}/plans`).subscribe(data => {
        this.subscribedPlans = data.map(plan => plan.id);
      });
    } else {
      console.error('User not found in localStorage');
    }
  }

  subscribe(planId: number, planName: string): void {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      const userId = user.id;
      this.http.post<{ message: string }>(`http://localhost:8080/auth/${userId}/subscribe/${planId}`, {})
        .subscribe(response => {
          this.successMessage = `You have subscribed to ${planName}`;
          this.subscribedPlans.push(planId);
          setTimeout(() => {
            this.successMessage = null;
          }, 5000);
        }, error => {
          console.error('Subscription failed', error);
        });
    } else {
      console.error('User not found in localStorage');
    }
  }

  isSubscribed(planId: number): boolean {
    return this.subscribedPlans.includes(planId);
  }

  viewPlan(plan:any): void {
    // Implement the logic to view the plan details
    switch (plan.name) {
      case 'Aluminium':
        this.router.navigate(['/aluminium-pass']);
        break;
      case 'Diamond':
        this.router.navigate(['/diamond-pass']);
        break;
      case 'Platinum':
        this.router.navigate(['/platinum-pass']);
        break;
      default:
        console.error('Unknown plan:', plan);
    }
  }
}
