import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DetailComponent } from '../detail-component/detail.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements AfterViewInit {
  // ...

  playerData = {
    name: 'Jayson Tatum',
    ppg: '27.0',
    rpg: '7.1',
    apg: '5.7'
  };

  // ...

  ngAfterViewInit() {
    // ...
    if (this.detailComponentRef) {
      this.detailComponentRef.name = this.playerData.name;
      this.detailComponentRef.ppg = this.playerData.ppg;
      this.detailComponentRef.rpg = this.playerData.rpg;
      this.detailComponentRef.apg = this.playerData.apg;
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
