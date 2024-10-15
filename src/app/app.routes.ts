import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JugadorCardComponent} from './jugador-card/jugador-card.component';
import {AboutComponent} from './about/about.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {CardGridComponent} from './card-grid/card-grid.component';

export const routes: Routes = [
  { path: '', component: CardGridComponent },
  { path: 'home', component: CardGridComponent },
  { path: 'about', component: AboutComponent },
  { path: 'statistics', component: StatisticsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
