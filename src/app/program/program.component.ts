import { Component } from '@angular/core';

export interface Program {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  duration: string;
  details: string;
  externalUrl?: string; // Optional external URL
}

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {
  programs: Program[] = [
    {
      id: 1,
      name: 'Badminton',
      description: 'Enhance your agility and reflexes with our badminton training sessions.',
      imageUrl: 'assets/badminton.jpg',
      duration: '1 Month',
      details: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
      externalUrl: 'https://en.wikipedia.org/wiki/Badminton'
    },
    {
      id: 2,
      name: 'Weight Training',
      description: 'Build strength and muscle with our structured weight training programs.',
      imageUrl: 'assets/weight-training.jpg',
      duration: '2 Months',
      details: 'Weight training involves using resistance to induce muscular contraction.',
      externalUrl: 'https://www.verywellfit.com/strength-4157137'
    },
    {
      id: 3,
      name: 'Zumba',
      description: 'Enjoy fitness with our fun and energetic Zumba classes.',
      imageUrl: 'assets/zumba.jpg',
      duration: '1 Month',
      details: 'Zumba is a dance fitness program that involves dance and aerobic elements.',
      externalUrl: 'https://en.wikipedia.org/wiki/Zumba'
    },
    {
      id: 4,
      name: 'Yoga',
      description: 'A group of physical, mental, and spiritual practices.',
      imageUrl: 'assets/yoga.jpg',
      duration: '1 Month',
      details: 'Yoga involves breath control, meditation, and specific bodily postures.',
      externalUrl: 'https://www.yogapedia.com/definition/4/yoga'
    },
    {
      id: 5,
      name: 'Pilates',
      description: 'A physical fitness system focused on core strength.',
      imageUrl: 'assets/pilates.jpg',
      duration: '1 Month',
      details: 'Pilates emphasizes balanced development of the body through core strength and flexibility.',
      externalUrl: 'https://www.pilates.com/what-is-pilates-and-benefits/'
    },
    {
      id: 6,
      name: 'HIIT',
      description: 'High-intensity interval training for maximum calorie burn.',
      imageUrl: 'assets/hiit.jpg',
      duration: '1 Month',
      details: 'HIIT is a cardiovascular exercise strategy alternating short periods of intense exercise.',
      externalUrl: 'https://www.everydayhealth.com/fitness/high-intensity-interval-training/guide/'
    }
  ];

  selectedProgram: Program | null = null;

  viewMore(program: Program) {
    if (program.externalUrl) {
      window.open(program.externalUrl, '_blank'); // Open in a new tab
    } else {
      this.selectedProgram = program; // Set the selected program for modal
    }
  }

  closeModal() {
    this.selectedProgram = null; // Clear the selected program
  }
}
