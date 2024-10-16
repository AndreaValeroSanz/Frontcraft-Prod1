import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JugadorCardModule } from './players-component/players.module';
import { CardGridComponent } from './card-grid/card-grid.component';

@NgModule({
  declarations: [
    CardGridComponent  // Declare the CardGridComponent here
  ],
  imports: [
    BrowserModule,
    JugadorCardModule,
    AppComponent,
    // Import the JugadorCardModule so you can use its components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
