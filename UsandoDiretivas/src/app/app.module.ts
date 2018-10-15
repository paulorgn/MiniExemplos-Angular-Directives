import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScreenService } from './services/screen.service';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenLarge,
    ScreenBelowLarge
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ScreenService
  ],
  exports: [
    ScreenLarge,
    ScreenBelowLarge
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
