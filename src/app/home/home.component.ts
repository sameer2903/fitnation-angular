import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  classImages: string[] = [
    'assets/images/class1.jpg',
    'assets/images/class2.jpg',
    'assets/images/class3.jpg',
    'assets/images/class4.jpg',
    'assets/images/class5.jpg',
    'assets/images/class6.jpg'
  ];

  joinOptions = [
    { image: 'assets/images/career.jpg', alt: 'Career at FitNation', text: 'Career at FitNation', link: '/career' },
    { image: 'assets/images/franchise.jpg', alt: 'FitNation Franchise', text: 'FitNation Franchise', link: '/franchise' }
  ];

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
