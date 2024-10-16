// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { PlayersComponent } from './players-component/players.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardGridComponent, PlayersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }