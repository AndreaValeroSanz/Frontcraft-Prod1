// Importa el decorador Component y el decorador Input desde Angular core
import { Component, Input } from '@angular/core';

// Define un componente con el selector 'app-detail'
@Component({
  selector: 'app-detail',          // Selector para usar este componente como <app-detail> en HTML
  standalone: true,                // Define que este componente puede funcionar de forma independiente sin un módulo
  imports: [],                      // Especifica que no tiene dependencias de otros módulos
  templateUrl: './detail.component.html',  // Ubicación del archivo de plantilla HTML para este componente
  styleUrl: './detail.component.css'       // Ubicación del archivo de estilos CSS para este componente
})

// Exporta la clase DetailComponent que representa los detalles de un jugador
export class DetailComponent {

  // Propiedades de entrada (Input) que reciben datos de un componente padre
  @Input() name: string = '';   // Nombre del jugador
  @Input() ppg: string = '';    // Puntos por juego
  @Input() rpg: string = '';    // Rebotes por juego
  @Input() apg: string = '';    // Asistencias por juego
  @Input() height: string = ''; // Altura del jugador
  @Input() weight: string = ''; // Peso del jugador
  @Input() age: string = '';    // Edad del jugador

  constructor() { }  // Constructor vacío, ya que no se necesita lógica de inicialización en este caso
}
