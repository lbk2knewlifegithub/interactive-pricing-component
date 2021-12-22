import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lbk-unsubscribe',
  template: ``,
})
export class UnSubscribe implements OnDestroy {
  subscriptins: Subscription[] = [];
  ngOnDestroy(): void {
    this.subscriptins.forEach((subscription) => subscription.unsubscribe());
  }

  set append(subscription: Subscription) {
    this.subscriptins.push(subscription);
  }
}
