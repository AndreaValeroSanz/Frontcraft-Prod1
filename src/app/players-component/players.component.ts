import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import { DetailComponent } from '../detail-component/detail.component';
import { CommonModule } from '@angular/common';
import { FullscreenModalComponent } from '../fullscreen-modal/fullscreen-modal.component';

@Component({
  selector: 'app-players',
  styleUrls: ['./players.component.css'],
  standalone: true, // Indica que este componente puede ser utilizado de manera independiente
  imports: [DetailComponent, CommonModule, FullscreenModalComponent], // Importa otros componentes y módulos necesarios
  templateUrl: './players.component.html' // Define la plantilla HTML del componente
})
export class PlayersComponent implements AfterViewInit {

  @Input() playerData: any; // Recibe los datos del jugador como entrada

  isCardEnlarged = false; // Estado para controlar si la tarjeta está agrandada
  showModal = false; // Estado para controlar la visibilidad del modal

  @ViewChild(DetailComponent, { static: false }) detailComponentRef?: DetailComponent; // Referencia al componente de detalle
  @ViewChild('card') cardElement!: ElementRef; // Referencia al elemento de la tarjeta en el DOM

  ngAfterViewInit() {
    // Se ejecuta después de que la vista del componente ha sido inicializada
    if (this.detailComponentRef) {
      // Asigna los datos del jugador al componente de detalle
      this.detailComponentRef.name = this.playerData.name;
      this.detailComponentRef.ppg = this.playerData.ppg;
      this.detailComponentRef.rpg = this.playerData.rpg;
      this.detailComponentRef.apg = this.playerData.apg;
      this.detailComponentRef.height = this.playerData.height;
      this.detailComponentRef.weight = this.playerData.weight;
      this.detailComponentRef.age = this.playerData.age;
    }
  }

  // Método para alternar el tamaño de la tarjeta
  toggleCardSize() {
    const card = this.cardElement.nativeElement;
    card.classList.toggle('enlarged'); // Alterna la clase "enlarged" en el elemento de la tarjeta
    this.isCardEnlarged = !this.isCardEnlarged; // Cambia el estado de isCardEnlarged
  }

  // Método para abrir el modal
  openModal() {
    this.showModal = true; // Cambia el estado para mostrar el modal
  }

  // Método para cerrar el modal
  closeModal() {
    this.showModal = false; // Cambia el estado para ocultar el modal
  }
}
