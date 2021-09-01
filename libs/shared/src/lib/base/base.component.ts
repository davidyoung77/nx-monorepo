import { Directive, OnDestroy } from '@angular/core';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/* tslint:disable:directive-class-suffix */
@Directive()
export class BaseComponent implements OnDestroy {
  private _destroy$?: Subject<void>;
  protected takeUntilDestroy<T>(): MonoTypeOperatorFunction<T> {
    if (!this._destroy$) {
      this._destroy$ = new Subject<void>();
    }

    return takeUntil<T>(this._destroy$);
  }

  ngOnDestroy(): void {
    if (this._destroy$) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }

  // Example usage
  // this._myService
  //   .myMethod()
  //   .pipe(this.takeUntilDestroy())
  //   .subscribe();
}
