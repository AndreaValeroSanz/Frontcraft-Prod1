import { Component, ElementRef, ViewChild, AfterViewInit, Input} from '@angular/core';
import { DetailComponent } from '../detail-component/detail.component';
import { CommonModule } from '@angular/common';
import { FullscreenModalComponent } from '../fullscreen-modal/fullscreen-modal.component';

@Component({
  selector: 'app-players',
  styleUrls: ['./players.component.css'],
  standalone: true,
  imports: [DetailComponent, CommonModule, FullscreenModalComponent],
  templateUrl: './players.component.html'
})
export class PlayersComponent implements AfterViewInit {
  // ...

  @Input() playerData: any;

  // ...

  isCardEnlarged = false;
  showModal = false;

  
  @ViewChild(DetailComponent, { static: false }) detailComponentRef?: DetailComponent;

  
  @ViewChild('card') cardElement!: ElementRef;

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
  toggleCardSize() {
    const card = this.cardElement.nativeElement;
    card.classList.toggle('enlarged');
    this.isCardEnlarged = !this.isCardEnlarged;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
