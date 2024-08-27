import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TimerService } from '../../services/timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  minutes: number = 5;
  seconds: number = 0;
  private timerSubscription: Subscription | undefined;

  constructor(private timerService: TimerService, private router: Router) {}

  ngOnInit() {
    this.timerSubscription = this.timerService.timer$.subscribe(time => {
      this.minutes = Math.floor(time / 60);
      this.seconds = time % 60;

      if (time === 0) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
