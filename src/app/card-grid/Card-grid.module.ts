import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridComponent } from './card-grid.component';
import { PlayersModule } from '../players-component/players.module';

@NgModule({
  declarations: [CardGridComponent],
  imports: [CommonModule, PlayersModule],
  exports: [CardGridComponent]
})
export class CardGridModule { }