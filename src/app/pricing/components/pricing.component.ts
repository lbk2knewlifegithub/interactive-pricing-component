import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'lbk-pricing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form
      [formGroup]="formGroup"
      class="bg-white py-6 shadow-lg rounded-xl"
      (ngSubmit)="onSubmit()"
    >
      <div class="px-6 grid place-items-center gap-8">
        <p class="text-muted font-semibold text-xl tracking-wide">
          {{ pageViews }} PAGEVIEWS
        </p>

        <lbk-slider
          formControlName="price"
          [steps]="sliderSteps"
          class="block w-full"
        ></lbk-slider>

        <div class="flex items-center gap-2">
          <strong class="text-4xl font-black"> {{ price }} </strong>
          <span class="font-medium">/ month</span>
        </div>

        <!-- billing -->
        <div class="flex text-xs gap-2 items-center w-full tracking-wide">
          <p>Monthly Billing</p>
          <lbk-switch formControlName="yearlyBilling"></lbk-switch>
          <p>Yearly Billing <span class="badge-warning ml-1">-25%</span></p>
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
    </form>
  `,
})
export class PricingComponent implements OnInit {
  formGroup!: FormGroup;

  prices: { [key: number]: string } = {
    8: '10K',
    12: '50K',
    16: '100K',
    24: '500k',
    36: '1M',
  };

  constructor(private readonly _fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      yearlyBilling: true,
      price: 16,
    });
  }

  get pageViews(): string {
    return this.prices[this.price];
  }

  get price(): number {
    return this.formGroup.value.price;
  }

  onSubmit(): void {}

  get sliderSteps(): number[] {
    return Object.keys(this.prices).map((key) => +key);
  }
}
