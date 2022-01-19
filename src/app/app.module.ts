import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/navigation/topnavbar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
