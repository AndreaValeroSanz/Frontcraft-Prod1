import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class AppComponent {
  title = 'Frontcraft-Prod1';
}