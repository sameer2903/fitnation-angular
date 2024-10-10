import { Component } from '@angular/core';

interface Program {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent 
{
  programs: Program[] = [
    {
      name: 'Badminton',
      description: 'Enhance your agility and reflexes with our badminton training sessions.',
      image: 'assets/badminton.jpg'
    },
    {
      name: 'Cardio',
      description: 'Boost your endurance with our high-energy cardio workouts.',
      image: 'assets/cardio.jpg'
    },
    {
      name: 'Weight Training',
      description: 'Build strength and muscle with our structured weight training programs.',
      image: 'assets/weight-training.jpg'
    },
    {
      name: 'Zumba',
      description: 'Enjoy fitness with our fun and energetic Zumba classes.',
      image: 'assets/zumba.jpg'
    },
    {
      name: 'Yoga',
      description: 'A group of physical, mental, and spiritual practices.',
      image: 'assets/yoga.jpg'
    },
    {
      name: 'Pilates',
      description: 'A physical fitness system focused on core strength.',
      image: 'assets/pilates.jpg'
    },
    {
      name: 'Kickboxing',
      description: 'A full-body workout combining martial arts and cardio.',
      image: 'assets/kickboxing.jpg'
    },
    {
      name: 'HIIT',
      description: 'High-intensity interval training for maximum calorie burn.',
      image: 'assets/hiit.jpg'
    }

  ];
    trainers = [
      {
        name: 'John Doe',
        role: 'Muscles Trainer',
        image: 'assets/trainer-1.jpg'
      },
      {
        name: 'Jane Doe',
        role: 'Boxing Trainer',
        image: 'assets/trainer-2.jpg'
      },
      {
        name: 'Tom Anderson',
        role: 'Fitness Trainer',
        image: 'assets/trainer-3.jpg'
      }

  ];

  selectedTrainer: any;

  moreInfo(program: any) {
    // Your existing code to handle more info
  }

  selectTrainer(trainer: any) {
    this.selectedTrainer = trainer;
  }

  showMoreInfo(programName: string) {
    alert(`More information about ${programName} coming soon!`);
  }
}
