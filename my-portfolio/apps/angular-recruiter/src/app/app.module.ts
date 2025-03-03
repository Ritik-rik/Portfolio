import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // adjust the path as needed

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent  // declare your HomeComponent here
  ],
  imports: [
    BrowserModule,
    // other modules if needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}