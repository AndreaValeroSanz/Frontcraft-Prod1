// Importa el decorador Component y el decorador Input desde Angular core
import { Component, Input } from '@angular/core';

// Define un componente con el selector 'app-card-grid'
@Component({
  selector: 'app-card-grid',  // Selector para utilizar este componente en HTML como <app-card-grid>
  template: `
    <div class="grid-container">
      <app-players class="grid-item"
                   *ngFor="let player of players"
      [playerData]="player">
    </app-players>
    </div>

  `,

  styleUrls: ['./card-grid.component.css']  // Estilos específicos para este componente
})

// Exporta la clase CardGridComponent que controla la lógica del componente
export class CardGridComponent {
  @Input() players: any[] = []; // Recibe la lista de jugadores desde un componente padre mediante el decorador @Input
}
