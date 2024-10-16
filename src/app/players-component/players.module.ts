import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { DetailComponent } from '../detail-component/detail.component';

@NgModule({
  declarations: [PlayersComponent, DetailComponent],
  imports: [CommonModule],
  exports: [PlayersComponent]
})
export class PlayersModule { }