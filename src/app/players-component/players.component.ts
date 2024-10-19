import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import { DetailComponent } from '../detail-component/detail.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  standalone: true,
  imports: [DetailComponent]
})
export class PlayersComponent implements AfterViewInit {
  // ...

  @Input() playerData: any;

  // ...

  ngAfterViewInit() {
    // ...
    if (this.detailComponentRef) {
      this.detailComponentRef.name = this.playerData.name;
      this.detailComponentRef.ppg = this.playerData.ppg;
      this.detailComponentRef.rpg = this.playerData.rpg;
      this.detailComponentRef.apg = this.playerData.apg;
      this.detailComponentRef.height = this.playerData.height;
      this.detailComponentRef.weight = this.playerData.weight;
      this.detailComponentRef.age = this.playerData.age;
    }
  }

  // ...

  @ViewChild(DetailComponent, { static: false }) detailComponentRef?: DetailComponent;

  
  @ViewChild('card') cardElement!: ElementRef;


  toggleCardSize() {
    const card = this.cardElement.nativeElement;
    card.classList.toggle('enlarged');
  }
}
