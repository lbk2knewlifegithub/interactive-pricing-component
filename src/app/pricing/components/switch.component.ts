import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const SWITCH_CONTROL_ACCESSORS = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true,
};

@Component({
  selector: 'lbk-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SWITCH_CONTROL_ACCESSORS],
  template: `
    <button
      (click)="onSwitch()"
      type="button"
      class="relative w-14 h-7 bg-toggle rounded-full duration-200 hover:bg-primary-900"
    >
      <!-- ball -->
      <div
        [style.left]="left"
        class="duration-300 absolute top-1/2 -translate-y-1/2 left-[6px] bg-white w-[18px] h-[18px] rounded-full "
      ></div>
      <!-- end ball -->
    </button>
  `,
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() open!: boolean;
  onValue!: (value: boolean) => void;
  onTouch!: () => void;

  writeValue(obj: boolean): void {
    this.open = obj;
  }

  registerOnChange(fn: any): void {
    this.onValue = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  get left(): string {
    // 18px + 6px = 24px
    if (this.open) return 'calc(100% - 24px)';

    return '6px';
  }

  onSwitch() {
    this.open = !this.open;
    this.onValue(this.open);
    this.onTouch();
  }
}
