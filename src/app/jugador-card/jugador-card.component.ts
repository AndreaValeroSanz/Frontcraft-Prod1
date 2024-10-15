import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-jugador-card',
  templateUrl: './jugador-card.component.html',
  styleUrls: ['./jugador-card.component.css']
})
export class JugadorCardComponent implements AfterViewInit {
  @ViewChild('card') cardElement!: ElementRef;

  ngAfterViewInit() {
    // Check if the cardElement is correctly referenced
    console.log(this.cardElement);
  }

  toggleCardSize() {
    const card = this.cardElement.nativeElement;
    card.classList.toggle('enlarged');
  }
}
