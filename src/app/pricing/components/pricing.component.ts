import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-pricing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-white py-6 shadow-lg rounded-xl">

      <div class="px-6 grid place-items-center gap-4">
        <p class="text-muted font-semibold text-xl tracking-wide">
          100K PAGEVIEWS
        </p>

        <lbk-slider></lbk-slider>

        <div class="flex items-center gap-2">
          <strong class="text-4xl"> $16.00 </strong>
          <span class="font-medium">/ month</span>
        </div>

        <!-- billing -->
        <div class="flex gap-2 text-sm">
          <p>Monthly Billing</p>
          <lbk-switch></lbk-switch>
          <p>Yearly Billing <span class="badge-warning ml-2">-25%</span></p>
        </div>
        <!-- end billing -->
      </div>

      <div
        class="grid px-6 pt-10 gap-6 place-items-center mt-6 border-t border-gray-200"
      >
        <!-- features -->
        <lbk-features></lbk-features>
        <!-- end features -->

        <div>
          <a routerLink="/" class="btn btn-dark">Start my trial</a>
        </div>
      </div>
    </div>
  `,
})
export class PricingComponent {}
