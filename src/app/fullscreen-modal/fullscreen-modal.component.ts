import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-fullscreen-modal',
  templateUrl: './fullscreen-modal.component.html',
  styleUrls: ['./fullscreen-modal.component.css'],
  standalone: true
})

export class FullscreenModalComponent {
  isModalOpen = false;
  youtubeUrl: string = 'https://www.youtube.com/watch?v=c017g0hynbQ'; 

  constructor(public sanitizer: DomSanitizer) {}

  @Output() buttonClicked: EventEmitter<void> = new EventEmitter();

  onButtonClick() {
    this.buttonClicked.emit(); 
  }
}