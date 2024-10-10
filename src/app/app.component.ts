import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppSearchbar} from './Searchbar/searchbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppSearchbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontcraft-Prod1';
}
