import { Component, h, State } from '@stencil/core';
import { Subject, take, takeUntil, tap, timer } from 'rxjs';
import state from '../../../model/store';

@Component({
  tag: 'timer-component',
  styleUrl: 'timer.css',
})
export class TimerComponent {
  @State() counter: number = 3500;
  destroy$: Subject<void> = new Subject<void>();

  setTimer(): void {
    timer(0, 1000)
      .pipe(
        take(this.counter),
        takeUntil(this.destroy$),
        tap(() => this.countDown(--this.counter)),
      )
      .subscribe();
  }

  countDown(remaining: number): void {
    if (remaining === 0) {
      this.counter = 0;
      state.timeover = true;
    }
  }

  componentWillLoad() {
    this.setTimer();
  }

  disconnectedCallback() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  render() {
    return (
      <div>
        Timer: <span class="badge bg-secondary">{this.counter}</span>
      </div>
    );
  }
}
