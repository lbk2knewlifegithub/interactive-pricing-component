import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-billing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center gap-2">
      <strong class="text-4xl font-black md:text-5xl"> {{ price | currency }} </strong>
      <span class="font-medium text-muted">/ {{ billingType }}</span>
    </div>
  `,
})
export class BillingComponent {
  @Input() price!: number;
  @Input() billingType!: string;
}
