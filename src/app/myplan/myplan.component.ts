import { Component, OnInit } from '@angular/core';
import { MyplanService } from '../services/myplan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myplan',
  templateUrl: './myplan.component.html',
  styleUrls: ['./myplan.component.css']
})
export class MyplanComponent implements OnInit {
  plans: any[] = [];

  constructor(private myplanService: MyplanService,private router: Router) {}

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      const userId = user.id;
      this.myplanService.getUserPlans(userId).subscribe((data) => {
        this.plans = data;
      });
    } else {
      console.error('User not found in localStorage');
    }
  }

  viewPlan(plan: any): void {
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
