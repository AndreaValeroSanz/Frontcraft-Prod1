import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  @Input() name: string = '';
  @Input() ppg: string = '';
  @Input() rpg: string = '';
  @Input() apg: string = '';

  constructor() { }

}
