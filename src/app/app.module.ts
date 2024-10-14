import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JugadorCardModule } from './jugador-card/jugador-card.module';
import { CardGridComponent } from './card-grid/card-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CardGridComponent  // Declare the CardGridComponent here
  ],
  imports: [
    BrowserModule,
    JugadorCardModule  // Import the JugadorCardModule so you can use its components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
