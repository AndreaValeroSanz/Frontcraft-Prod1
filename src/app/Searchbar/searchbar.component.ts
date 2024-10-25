import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class AppSearchbar {
  isDropdownVisible = false; // Controla la visibilidad del menú desplegable de filtros
  nameFilter: string = ''; // Almacena el texto del filtro de nombre
  ageFilter: number | null = null; // Almacena el filtro de edad; puede ser un número o nulo

  @Output() filterChange = new EventEmitter<{ name: string, age: number | null }>();
  // Emite eventos cuando se aplican filtros, con un objeto que contiene el nombre y la edad

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
    // Cambia el estado de visibilidad del menú desplegable
  }

  applyFilter() {
    this.filterChange.emit({ name: this.nameFilter, age: this.ageFilter });
    // Emite el evento de cambio de filtro con los valores actuales de nombre y edad
  }
}
