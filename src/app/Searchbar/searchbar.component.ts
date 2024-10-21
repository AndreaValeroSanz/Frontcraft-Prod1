import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Asegúrate de tener CommonModule importado

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class AppSearchbar {
  isDropdownVisible = false;

  // Esta función alterna la visibilidad del menú
  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
