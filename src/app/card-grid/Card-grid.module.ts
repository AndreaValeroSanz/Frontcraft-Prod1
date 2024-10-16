// Card-grid.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridComponent } from './card-grid.component';
import { PlayersComponent } from '../players-component/players.component';

@NgModule({
  declarations: [CardGridComponent],
  imports: [CommonModule, PlayersComponent],
  exports: [CardGridComponent]
})
export class CardGridModule { }