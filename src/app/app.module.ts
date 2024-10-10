// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JugadorCardModule } from './jugador-card/jugador-card.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Update this line
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JugadorCardModule,
    RouterModule.forRoot(routes) // Update this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }