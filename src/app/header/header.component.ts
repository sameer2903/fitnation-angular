import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dropdownOpen = false;
  username="";
  constructor(private router: Router ) {}

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
       this.username = user.name;
      
    } else {
      console.error('User not found in localStorage');
    }
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    this.dropdownOpen = false;
  }

  logout() {
    // Perform logout logic here
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
