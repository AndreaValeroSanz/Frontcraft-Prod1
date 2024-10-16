import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayersComponent} from './players-component/players.component';
import {AboutComponent} from './about/about.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {CardGridComponent} from './card-grid/card-grid.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'statistics', component: StatisticsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
