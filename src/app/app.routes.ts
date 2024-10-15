import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JugadorCardComponent} from './jugador-card/jugador-card.component';
import {AboutComponent} from './about/about.component';
import {StadisticsComponent} from './stadistics/stadistics.component';
import {CardGridComponent} from './card-grid/card-grid.component';

export const routes: Routes = [
  { path: '', component: CardGridComponent },
  { path: 'home', component: CardGridComponent },
  { path: 'about', component: AboutComponent },
  { path: 'stadistics', component: StadisticsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
