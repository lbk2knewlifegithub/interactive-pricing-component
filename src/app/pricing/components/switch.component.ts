import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <h1>switch</h1> `,
})
export class SwitchComponent {
  @Input() open!: boolean;
}
