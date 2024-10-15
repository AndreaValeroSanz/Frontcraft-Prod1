import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true, // Asegúrate de tener esto
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  exploreTeam() {
    const element = document.getElementById('players-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToPlayers() {
    const element = document.getElementById('players-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
