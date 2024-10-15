import { Component } from '@angular/core';
import { AppSearchbar } from '../Searchbar/searchbar.component';
import { CardGridModule } from '../card-grid/Card-grid.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppSearchbar, CardGridModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
