import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'lbk-pricing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form
      [formGroup]="formGroup"
      class="bg-white shadow-lg rounded-xl"
      (ngSubmit)="onSubmit()"
    >
      <div
        class="px-6 py-10 grid place-items-center gap-8 sm:gap-10 sm:p-10 md:place-content-stretch md:gap-16 md:p-16 md:pb-14"
      >
        <div class="grid md:grid-cols-2 md:items-center md:w-full">
          <!-- page views -->
          <p class="text-muted font-black text-xl tracking-wide">
            {{ pageViews }} PAGEVIEWS
          </p>
          <!-- page views -->

          <!-- billing -->
          <lbk-billing
            class=" hidden md:block"
            [price]="price"
            [billingType]="billing"
          ></lbk-billing>
          <!-- end billing -->
        </div>

        <!-- slider -->
        <lbk-slider
          formControlName="price"
          [steps]="sliderSteps"
          class="block w-full"
        ></lbk-slider>
        <!-- end slider -->

        <!-- billing -->
        <lbk-billing
          class="md:hidden"
          [price]="price"
          [billingType]="billing"
        ></lbk-billing>
        <!-- end billing -->

        <!-- billing -->
        <div
          class="flex text-xs gap-2 items-center tracking-wide sm:text-sm sm:gap-4 md:gap-6 md:text-base"
        >
          <p>Monthly Billing</p>
          <lbk-switch formControlName="yearlyBilling"></lbk-switch>
          <p>
            Yearly Billing
            <span class="badge-warning ml-1 md:ml-3"
              >-25% <span class="hidden md:inline">discount</span></span
            >
          </p>
        </div>
        <!-- end billing -->
      </div>

      <div
        class="grid p-6 pb-10 gap-10 place-items-center border-t border-gray-200 sm:py-10 md:grid-cols-2 md:place-items-start md:p-16 md:pt-14"
      >
        <!-- features -->
        <lbk-features></lbk-features>
        <!-- end features -->

        <div class="">
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
      yearlyBilling: false,
      price: 16,
    });
  }

  get pageViews(): string {
    const { price } = this.formGroup.value;
    return this.prices[price];
  }

  get price(): number {
    const { price, yearlyBilling } = this.formGroup.value;
    return yearlyBilling ? price * 1.25 : price;
  }

  get billing(): string {
    const { yearlyBilling } = this.formGroup.value;
    return yearlyBilling ? 'year' : 'month';
  }

  onSubmit(): void {}

  get sliderSteps(): number[] {
    return Object.keys(this.prices).map((key) => +key);
  }
}
