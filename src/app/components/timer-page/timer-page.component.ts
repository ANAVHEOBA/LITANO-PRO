import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-page',
  template: `
    <div class="timer-container">
      <app-countdown-timer></app-countdown-timer>
    </div>
  `,
  styles: [`
    .timer-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #1a1a1a;
    }
  `]
})
export class TimerPageComponent {}