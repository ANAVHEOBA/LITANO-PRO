import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TimerPageComponent } from './components/timer-page/timer-page.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TimerPageComponent,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
