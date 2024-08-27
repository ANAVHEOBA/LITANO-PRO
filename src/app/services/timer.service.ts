import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private countdown = new BehaviorSubject<number>(300); // 5 minutes in seconds
  timer$ = this.countdown.asObservable();

  constructor() {
    this.startTimer();
  }

  private startTimer() {
    timer(0, 1000)
      .pipe(takeWhile(() => this.countdown.value > 0))
      .subscribe(() => {
        this.countdown.next(this.countdown.value - 1);
      });
  }

  resetTimer() {
    this.countdown.next(300);
    this.startTimer();
  }
}
