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
  isDropdownVisible = false;
  nameFilter: string = '';
  ageFilter: number | null = null;

  @Output() filterChange = new EventEmitter<{ name: string, age: number | null }>();

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  applyFilter() {
    this.filterChange.emit({ name: this.nameFilter, age: this.ageFilter });
  }
}
