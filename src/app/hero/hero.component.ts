import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true, // Asegúrate de tener esto
  templateUrl: './hero.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  exploreTeam() {
    const element = document.getElementById('main-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToPlayers() {
    const element = document.getElementById('main-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
